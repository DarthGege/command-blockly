/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for procedure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Commands.procedures');

goog.require('Blockly.Commands');


Blockly.Commands['procedures_defreturn'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.Commands.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.Commands.statementToCode(block, 'STACK');
  if (Blockly.Commands.STATEMENT_PREFIX) {
    branch = Blockly.Commands.prefixLines(
        Blockly.Commands.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.Commands.INDENT) + branch;
  }
  if (Blockly.Commands.INFINITE_LOOP_TRAP) {
    branch = Blockly.Commands.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.Commands.valueToCode(block, 'RETURN',
      Blockly.Commands.ORDER_NONE) || '';
  if (returnValue) {
    returnValue = '  return ' + returnValue + ';\n';
  }
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Commands.variableDB_.getName(block.arguments_[x],
        Blockly.Variables.NAME_TYPE);
  }
  var code = 'function ' + funcName + '(' + args.join(', ') + ') {\n' +
      branch + returnValue + '}';
  code = Blockly.Commands.scrub_(block, code);
  Blockly.Commands.definitions_[funcName] = code;
  return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.Commands['procedures_defnoreturn'] =
    Blockly.Commands['procedures_defreturn'];

Blockly.Commands['procedures_callreturn'] = function(block) {
  // Call a procedure with a return value.
  var funcName = Blockly.Commands.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Commands.valueToCode(block, 'ARG' + x,
        Blockly.Commands.ORDER_COMMA) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ')';
  return [code, Blockly.Commands.ORDER_FUNCTION_CALL];
};

Blockly.Commands['procedures_callnoreturn'] = function(block) {
  // Call a procedure with no return value.
  var funcName = Blockly.Commands.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Commands.valueToCode(block, 'ARG' + x,
        Blockly.Commands.ORDER_COMMA) || 'null';
  }
  var code = funcName + '(' + args.join(', ') + ');\n';
  return code;
};

Blockly.Commands['procedures_ifreturn'] = function(block) {
  // Conditionally return value from a procedure.
  var condition = Blockly.Commands.valueToCode(block, 'CONDITION',
      Blockly.Commands.ORDER_NONE) || 'false';
  var code = 'if (' + condition + ') {\n';
  if (block.hasReturnValue_) {
    var value = Blockly.Commands.valueToCode(block, 'VALUE',
        Blockly.Commands.ORDER_NONE) || 'null';
    code += '  return ' + value + ';\n';
  } else {
    code += '  return;\n';
  }
  code += '}\n';
  return code;
};
