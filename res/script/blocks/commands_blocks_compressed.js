'use strict';

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

//Common Structures 
Blockly.Blocks['stat_text_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("achievement.openInventory"), "STAT");
    this.setInputsInline(false);
    this.setOutput(true, "stat");
    this.setColour(120);
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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(45);
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
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
