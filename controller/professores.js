var professoresModulo = angular.module('professoresModulo',[]);

professoresModulo.controller("professoresController", function ($scope){
  $scope.professores = [
    {codigo: 1, nome: 'Wagner Augusto', email:'wagnera@gmail.com', fone: '61 98541 5400'},
    {codigo: 2, nome: 'Marina Amorim', email:'marinaa@gmail.com', fone: '61 98425 6584'},
    {codigo: 3, nome: 'Julho Melo', email:'julhoa@gmail.com', fone: '61 98765 6584'},
    {codigo: 4, nome: 'Lucia Alcantara', email:'luciaa@gmail.com', fone: '61 98541 8546'},
    {codigo: 5, nome: 'Thais mello', email:'thaism@gmail.com', fone: '61 98541 3695'}
  ];

  $scope.selecionaProfessor = function(professorSelecionado){
    $scope.professor = professorSelecionado;
  }

  $scope.limparCampos = function(){
    $scope.professor = "";
  }

  $scope.salvar = function(){
    $scope.professores.push($scope.professor);
    $scope.limparCampos();
  }

  $scope.excluir = function(){
    $scope.professores.splice($scope.professores.indexOf($scope.professor),1);
    $scope.limparCampos();
  }

});
