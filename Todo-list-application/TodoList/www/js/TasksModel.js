function getTasks(){
	this.items = [{nome: 'Task 1', finalizada: false}, {nome: 'Task 2', finalizada: false}, {nome: 'Task 1', finalizada: false}];

	this.add = function(item){
		this.items.push(item);
	};
	this.remove = function(item){
		var pos = this.items.indexOf(item);
		this.items.splice(pos, 1);
	};
}
