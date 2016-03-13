'use strict';
function isInt(value) {
  var x;
  if (isNaN(value)) {
    return false;
  }
  x = parseFloat(value);
  return (x | 0) === x;
}
Blockly.FieldTextInput.numberValidator = function(text) {
  if (text === null) {
    return null;
  }
  text = String(text);
  // TODO: Handle cases like 'ten', '1.203,14', etc.
  // 'O' is sometimes mistaken for '0' by inexperienced users.
  text = text.replace(/O/ig, '0');
  // Strip out thousands separators.
  text = text.replace(/,/g, '');
  var n = parseFloat(text || 0);
  return isNaN(n) ? null : String(n);
};
Blockly.FieldTextInput.coordValidator = function(text) {
  return (new RegExp("^~?([0-9]+.?)?[0-9]*$").test(text)) ? String(text) : null;
};
Blockly.FieldTextInput.byteValidator = function(text) {
  var n = Blockly.FieldTextInput.numberValidator(text);
  return (n < -128 || n > 127 || !isInt(n)) ? null : String(n);
};
Blockly.FieldTextInput.shortValidator = function(text) {
  var n = Blockly.FieldTextInput.numberValidator(text);
  return (n < -32768 || n > 32767 || !isInt(n)) ? null : String(n);
};
Blockly.FieldTextInput.intValidator = function(text) {
  var n = Blockly.FieldTextInput.numberValidator(text);
  return (n < -2147483648 || n > 2147483647 || !isInt(n)) ? null : String(n);
};
Blockly.FieldTextInput.longValidator = function(text) {
  var n = Blockly.FieldTextInput.numberValidator(text);
  return (n < -9223372036854775808 || n > 9223372036854775807 || !isInt(n)) ? null : String(n);
};
Blockly.FieldTextInput.floatValidator = function(text) {
  var n = Blockly.FieldTextInput.numberValidator(text);
  return n;
};
Blockly.FieldTextInput.doubleValidator = function(text) {
  var n = Blockly.FieldTextInput.numberValidator(text);
  return n;
};
Blockly.FieldTextInput.weather_durationValidator = function(text) {
  if(text == "") return text;
  var n = Blockly.FieldTextInput.numberValidator(text);
  return (n < 1 || n > 1000000 || !isInt(n)) ? null : String(n);
};

//Structure to accept commands
Blockly.Blocks['simple_command'] = {
  init: function() {
    this.appendValueInput("COMMAND")
        .setCheck("command")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("/");
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//Nbt
Blockly.Blocks['nbt_compound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("res/image/nbt_compound.png", 16, 16, "compound"));
    this.appendStatementInput("CHILDS")
        .setCheck(["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setOutput(true, "nbt_compound");
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_compound_null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("name"), "NAME")
        .appendField(':')
        .appendField(new Blockly.FieldImage("res/image/nbt_null.png", 16, 16, "n"));
    this.setPreviousStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setColour(240);
    this.setEditable(false);
    this.setTooltip('');
  }
};
Blockly.Blocks['nbt_compound_byte'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("name"), "NAME")
        .appendField(':')
        .appendField(new Blockly.FieldImage("res/image/nbt_byte.png", 16, 16, "byte"))
        .appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.byteValidator), "VALUE");
    this.setPreviousStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setNextStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_compound_short'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("name"), "NAME")
        .appendField(':')
        .appendField(new Blockly.FieldImage("res/image/nbt_short.png", 16, 16, "short"))
        .appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.shortValidator), "VALUE");
    this.setPreviousStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setNextStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_compound_int'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("name"), "NAME")
        .appendField(':')
        .appendField(new Blockly.FieldImage("res/image/nbt_int.png", 16, 16, "int"))
        .appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.intValidator), "VALUE");
    this.setPreviousStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setNextStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_compound_long'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("name"), "NAME")
        .appendField(':')
        .appendField(new Blockly.FieldImage("res/image/nbt_long.png", 16, 16, "long"))
        .appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.longValidator), "VALUE");
    this.setPreviousStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setNextStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_compound_float'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("name"), "NAME")
        .appendField(':')
        .appendField(new Blockly.FieldImage("res/image/nbt_float.png", 16, 16, "float"))
        .appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.floatValidator), "VALUE");
    this.setPreviousStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setNextStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_compound_double'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("name"), "NAME")
        .appendField(':')
        .appendField(new Blockly.FieldImage("res/image/nbt_double.png", 16, 16, "double"))
        .appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.doubleValidator), "VALUE");
    this.setPreviousStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setNextStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_compound_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("name"), "NAME")
        .appendField(':')
        .appendField(new Blockly.FieldImage("res/image/nbt_string.png", 16, 16, "string"))
        .appendField(new Blockly.FieldTextInput("value"), "VALUE");
    this.setPreviousStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setNextStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_compound_compound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("name"), "NAME")
        .appendField(':')
        .appendField(new Blockly.FieldImage("res/image/nbt_compound.png", 16, 16, "compound"));
    this.appendStatementInput("CHILDS")
        .setCheck(["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list", "nbt_compound_null"]);
    this.setPreviousStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setNextStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_compound_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("name"), "NAME")
        .appendField(':')
        .appendField(new Blockly.FieldImage("res/image/nbt_list.png", 16, 16, "list"));
    this.appendStatementInput("CHILDS")
        .setCheck(["nbt_list_byte", "nbt_list_short", "nbt_list_int", "nbt_list_long", "nbt_list_float", "nbt_list_double", "nbt_list_string", "nbt_list_compound", "nbt_list_list", "nbt_list_null"]);
    this.setPreviousStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setNextStatement(true, ["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list"]);
    this.setColour(240);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_list_null'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('-')
        .appendField(new Blockly.FieldImage("res/image/nbt_null.png", 16, 16, "n"));
    this.setPreviousStatement(true, "nbt_list_null");
    this.setColour(300);
    this.setTooltip('');
  }
};

Blockly.Blocks['nbt_list_byte'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('-')
        .appendField(new Blockly.FieldImage("res/image/nbt_byte.png", 16, 16, "byte"))
        .appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.byteValidator), "VALUE");
    this.setPreviousStatement(true, "nbt_list_byte");
    this.setNextStatement(true, "nbt_list_byte");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_list_short'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('-')
        .appendField(new Blockly.FieldImage("res/image/nbt_short.png", 16, 16, "short"))
        .appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.shortValidator), "VALUE");
    this.setPreviousStatement(true, "nbt_list_short");
    this.setNextStatement(true, "nbt_list_short");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_list_int'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('-')
        .appendField(new Blockly.FieldImage("res/image/nbt_int.png", 16, 16, "int"))
        .appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.intValidator), "VALUE");
    this.setPreviousStatement(true, "nbt_list_int");
    this.setNextStatement(true, "nbt_list_int");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_list_long'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('-')
        .appendField(new Blockly.FieldImage("res/image/nbt_long.png", 16, 16, "long"))
        .appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.longValidator), "VALUE");
    this.setPreviousStatement(true, "nbt_list_long");
    this.setNextStatement(true, "nbt_list_long");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_list_float'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('-')
        .appendField(new Blockly.FieldImage("res/image/nbt_float.png", 16, 16, "float"))
        .appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.floatValidator), "VALUE");
    this.setPreviousStatement(true, "nbt_list_float");
    this.setNextStatement(true, "nbt_list_float");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_list_double'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('-')
        .appendField(new Blockly.FieldImage("res/image/nbt_double.png", 16, 16, "double"))
        .appendField(new Blockly.FieldTextInput("0",Blockly.FieldTextInput.doubleValidator), "VALUE");
    this.setPreviousStatement(true, "nbt_list_double");
    this.setNextStatement(true, "nbt_list_double");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_list_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('-')
        .appendField(new Blockly.FieldImage("res/image/nbt_string.png", 16, 16, "string"))
        .appendField(new Blockly.FieldTextInput("value"), "VALUE");
    this.setPreviousStatement(true, "nbt_list_string");
    this.setNextStatement(true, "nbt_list_string");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_list_compound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('-')
        .appendField(new Blockly.FieldImage("res/image/nbt_compound.png", 16, 16, "compound"));
    this.appendStatementInput("CHILDS")
        .setCheck(["nbt_compound_byte", "nbt_compound_short", "nbt_compound_int", "nbt_compound_long", "nbt_compound_float", "nbt_compound_double", "nbt_compound_string", "nbt_compound_compound", "nbt_compound_list", "nbt_compound_null"]);
    this.setPreviousStatement(true, "nbt_list_compound");
    this.setNextStatement(true, "nbt_list_compound");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nbt_list_list'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('-')
        .appendField(new Blockly.FieldImage("res/image/nbt_list.png", 16, 16, "list"));
    this.appendStatementInput("CHILDS")
        .setCheck(["nbt_list_byte", "nbt_list_short", "nbt_list_int", "nbt_list_long", "nbt_list_float", "nbt_list_double", "nbt_list_string", "nbt_list_compound", "nbt_list_list", "nbt_list_null"]);
    this.setPreviousStatement(true, "nbt_list_list");
    this.setNextStatement(true, "nbt_list_list");
    this.setColour(300);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
//Common Structures

Blockly.Blocks['stat_text_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("achievement.openInventory"), "STAT");
    this.setInputsInline(false);
    this.setOutput(true, "stat");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['coords'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("res/image/coords.png", 16, 16, "compound"))
        .appendField(new Blockly.FieldTextInput("~0",Blockly.FieldTextInput.coordValidator), "X")
        .appendField(new Blockly.FieldTextInput("~0",Blockly.FieldTextInput.coordValidator), "Y")
        .appendField(new Blockly.FieldTextInput("~0",Blockly.FieldTextInput.coordValidator), "Z");
    this.setOutput(true, "coords");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['player_selector'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("ps_arg")
        .appendField("@")
        .appendField(new Blockly.FieldDropdown([["all players", "a"], ["nearest player", "p"], ["random player", "r"], ["all entities", "e"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, "player_selector");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['ps_mode'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("ps_arg")
        .appendField("mode")
        .appendField(new Blockly.FieldDropdown([["survival", "s"], ["creative", "c"], ["adventure", "a"], ["spectator", "sp"]]), "NAME");
    this.setOutput(true, "ps_arg");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//commands
Blockly.Blocks['command_achievement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("achievement")
        .appendField(new Blockly.FieldDropdown([["give", "give"], ["take", "take"]]), "ACTION");
    this.appendValueInput("STAT")
        .setCheck("stat")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Stat");
    this.appendValueInput("PLAYERS")
        .setCheck("player_selector")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Player selector");
    this.setOutput(true, "command");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['command_blockdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("blockdata");
    this.appendValueInput("COORDS")
        .setCheck("coords")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("<x> <y> <z>");
    this.appendValueInput("NBT")
        .setCheck("nbt_compound")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("<datatag>");
    this.setInputsInline(false);
    this.setOutput(true, "command");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['command_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("clear");
    this.appendValueInput("PLAYER")
        .setCheck("player_selector")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("[player]");
    this.appendValueInput("ITEM")
        .setCheck("item_id")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("[item]");
    this.appendValueInput("DATA")
        .setCheck("item_data")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("[data]");
    this.appendValueInput("MAXCOUNT")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("[maxCount]");
    this.appendValueInput("NBT")
        .setCheck("nbt_compound")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("[dataTag]");
    this.setOutput(true, "command");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['command_difficulty'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("difficulty");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["peaceful", "p"], ["easy", "e"], ["normal", "n"], ["hard", "h"]]), "DIFFICULTY");
    this.setOutput(true, "command");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['command_entitydata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("entitydata");
    this.appendValueInput("ENTITY")
        .setCheck("player_selector")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("<entity>");
    this.appendValueInput("NBT")
        .setCheck("nbt_compound")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("<dataTag>");
    this.setOutput(true, "command");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['command_gamemode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gamemode")
        .appendField(new Blockly.FieldDropdown([["survival", "s"], ["creative", "c"], ["adventure", "a"], ["spectator", "sp"]]), "MODE");
    this.appendValueInput("PLAYER")
        .setCheck("player_selector")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("[player]");
    this.setOutput(true, "command");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['command_setworldspawn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setworldspawn");
    this.appendValueInput("COORDS")
        .setCheck("coords")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("<x> <y> <z>");
    this.setOutput(true, "command");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};Blockly.Blocks['command_weather'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("weather")
        .appendField(new Blockly.FieldDropdown([["clear", "CLEAR"], ["rain", "RAIN"], ["thunder", "THUNDER"]]), "WEATHER");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("[duration]")
        .appendField(new Blockly.FieldTextInput("",Blockly.FieldTextInput.weather_durationValidator), "DURATION");
    this.setOutput(true, "command");
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};