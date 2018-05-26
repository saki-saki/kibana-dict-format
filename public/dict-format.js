export function createDictFormat(FieldFormat) {
    return class DictFormat extends FieldFormat {
        getParamDefaults() {
            return {
                fieldType: null, // populated by editor, see controller below
                optionJson: "{\n\"value\":\"text\"\n}",
                dictType: "",
                optionData: {},
                displayValue: false
            };
        }


        _convert(val) {
            var optionData = this.param("optionData");
            if (!optionData) {
                return val;
            }

            var displayText = optionData[val];
            if (displayText) {
                var displayValue = this.param("displayValue");
                if (true == displayValue) {
                    displayText += "(" + val + ")";
                }
            } else {
                displayText = val;
            }

            return displayText;
        }

        static id = 'dict';
        static title = 'Dict';
        static fieldType = [
            'number',
            'string'
        ];
    };
}