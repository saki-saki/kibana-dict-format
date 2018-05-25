
export function createDictFormat(FieldFormat) {
  return class DictFormat extends FieldFormat {
    getParamDefaults() {
      return {
        fieldType: null, // populated by editor, see controller below
        dictOptions: [{value:"",text:""}]
      };
    }


    _convert(val) {
      switch (this.param('transform')) {
        case 'lower': return String(val).toLowerCase();
        default: return val;
      }
    }

    static id = 'dict';
    static title = 'Dict';
    static fieldType = [
      'number',
      'string'
    ];
  };
}

