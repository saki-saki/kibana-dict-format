import './dict-editor.less';
import dictEditorTemplate from './dict-editor.html';

export function dictEditor() {
    return {
        formatId: 'dict',
        template: dictEditorTemplate,
        controller($scope) {
            $scope.$watch('editor.formatParams.optionJson', (value) => {
                if (!value) {
                    $scope.nodify(true, "error", "请输入字典数据:"+value);
                }

                var data = null;

                try {
                    var data = JSON.parse(value);
                } catch (error) {
                    data = {};
                    $scope.nodify(true, "error", "字典数据解析失败,请保证数据是正确的json格式:"+value+"  error is:" + error);
                }

                $scope.editor.formatParams.optionData = data;

            });

            $scope.nodify = function(show, type, message) {
                if (true != show) {
                    message = "";
                }
                $scope.message = message;
            }

            // $scope.addOption = function () {
            //   $scope.editor.formatParams.dictOptions.push({value:"",text:""});
            // };

            // $scope.removeOption = function (index) {
            //   $scope.editor.formatParams.dictOptions.splice(index, 1);
            // };
        }
    };
}