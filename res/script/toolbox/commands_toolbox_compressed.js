// Do not edit this file; automatically generated by build.py.
'use strict';


// Copyright 2012 Google Inc.  Apache License 2.0
var Toolbox={};
Toolbox.Build=function(nodes){
  var tag = "";
  var args = "";
  var childs = "";
  var first = true;
  nodes.forEach(function(node) {
    if(typeof node == "string") {
      if(first) {
        first=false;
        tag = node;
      } else {
        childs = childs + node;
      }
    }
    else if(typeof node == "undefined") {} 
    else if(node instanceof Array) childs = childs + Toolbox.Build(node);
    else for (var key in node) args = args+' '+key+'="'+node[key]+'"';
  });
  return "<"+tag+args+">"+childs+"</"+tag+">";
};

Toolbox.Tree = 
  ['xml',
    ['category',{'name':'General','colour':"120"},
      ['block',{'type':'simple_command'}],
      ['block',{'type':'advanced_command'}],
      ['block',{'type':'stat_text_input'}],
    ],
    ['category',{'name':'Selector','colour':"0"},
      ['block',{'type':'player_selector'}],
      ['block',{'type':'ps_mode'}],
    ],
    ['category',{'name':'NBT','colour':"270"},
      ['block',{'type':'nbt_compound'},
        ['value',{'name':'CHILDS'},
          ['shadow',{'type':'nbt_compound_null'}],
        ],
      ],
      ['category',{'name':'Compound','colour':"240"},
        ['block',{'type':'nbt_compound_byte'}],
        ['block',{'type':'nbt_compound_short'}],
        ['block',{'type':'nbt_compound_int'}],
        ['block',{'type':'nbt_compound_long'}],
        ['block',{'type':'nbt_compound_float'}],
        ['block',{'type':'nbt_compound_double'}],
        ['block',{'type':'nbt_compound_string'}],
        ['block',{'type':'nbt_compound_compound'},
          ['value',{'name':'CHILDS'},
            ['shadow',{'type':'nbt_compound_null'}],
          ],
        ],
        ['block',{'type':'nbt_compound_list'},
          ['value',{'name':'CHILDS'},
            ['shadow',{'type':'nbt_list_null'}],
          ],
        ],
      ],
      ['category',{'name':'List','colour':"300"},
        ['block',{'type':'nbt_list_byte'}],
        ['block',{'type':'nbt_list_short'}],
        ['block',{'type':'nbt_list_int'}],
        ['block',{'type':'nbt_list_long'}],
        ['block',{'type':'nbt_list_float'}],
        ['block',{'type':'nbt_list_double'}],
        ['block',{'type':'nbt_list_string'}],
        ['block',{'type':'nbt_list_compound'},
          ['value',{'name':'CHILDS'},
            ['shadow',{'type':'nbt_compound_null'}],
          ],
        ],
        ['block',{'type':'nbt_list_list'},
          ['value',{'name':'CHILDS'},
            ['shadow',{'type':'nbt_list_null'}],
          ],
        ],
      ],
    ],
    ['category',{'name':'Command','colour':"180"},
      ['block',{'type':'command_achievement'},
        ['value',{'name':'STAT'},
          ['shadow',{'type':'stat_text_input'},
            ['field',{'name':'STAT'},
              '*',
            ],
          ],
        ],
      ],
      ['block',{'type':'command_blockdata'}],
      ['block',{'type':'command_clear'}],
    ],
  ]

