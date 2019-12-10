var cursoModulo = angular.module('cursoModulo',[]);

cursoModulo.controller("cursosController", function ($scope){

  $scope.professores = [
    {codigo: 1, nome: 'Wagner Augusto', email:'wagnera@gmail.com', fone: '61 98541 5400'},
    {codigo: 2, nome: 'Marina Amorim', email:'marinaa@gmail.com', fone: '61 98425 6584'},
    {codigo: 3, nome: 'Julho Melo', email:'julhoa@gmail.com', fone: '61 98765 6584'},
    {codigo: 4, nome: 'Lucia Alcantara', email:'luciaa@gmail.com', fone: '61 98541 8546'},
    {codigo: 5, nome: 'Thais mello', email:'thaism@gmail.com', fone: '61 98541 3695'}
  ];

  $scope.cursos = [
    {codigo: 1, nome: 'Java para Web', diashorarios:'Segunda e quartas, 19hrs', professor:{codigo: 1, nome: 'Wagner Augusto', email:'wagnera@gmail.com', fone: '61 98541 5400'}},
    {codigo: 2, nome: 'Delphi', diashorarios:'Terça e quinta, 21hrs', professor:{codigo: 2, nome: 'Marina Amorim', email:'marinaa@gmail.com', fone: '61 98425 6584'}},
    {codigo: 3, nome: 'PHP', diashorarios:'Quarta e sexta, 21hrs', professor:{codigo: 3, nome: 'Julho Melo', email:'julhoa@gmail.com', fone: '61 98765 6584'}},
    {codigo: 4, nome: 'Java', diashorarios:'Segunda, quarta e quinta, 14hrs', professor:{codigo: 4, nome: 'Lucia Alcantara', email:'luciaa@gmail.com', fone: '61 98541 8546'}},
    {codigo: 5, nome: 'C++', diashorarios:'Sabado, 08hrs', professor:{codigo: 5, nome: 'Thais mello', email:'thaism@gmail.com', fone: '61 98541 3695'}}
  ];

  $scope.selecionaCurso = function(cursoSelecionado){
    $scope.curso = cursoSelecionado;
  }

  $scope.limparCampos = function(){
    $scope.curso = {};
  }

  $scope.salvar = function(){
    $scope.cursos.push($scope.curso);
    $scope.limparCampos();
  }

  $scope.excluir = function(){
    $scope.cursos.splice($scope.cursos.indexOf($scope.curso),1);
    $scope.limparCampos();
  }

});
