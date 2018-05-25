import './dict-editor.less';
import dictEditorTemplate from './dict-editor.html';

export function dictEditor() {
  return {
    formatId: 'dict',
    template: dictEditorTemplate,
    controller($scope) {
      $scope.$watch('editor.field.type', (type) => {
        $scope.editor.formatParams.fieldType = type;
      });

      $scope.addOption = function () {
        $scope.editor.formatParams.dictOptions.push({value:"",text:""});
      };

      $scope.removeOption = function (index) {
        $scope.editor.formatParams.dictOptions.splice(index, 1);
      };
    }
  };
}
