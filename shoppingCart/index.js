var app = new Vue({
	el:'#app',
	data:{
		list:[
			{
				id:1,
				name:'iphone 6',
				price:6188,
				count:1
			},
			{
				id:2,
				name:'samsung s7',
				price:4999,
				count:1
			},
			{
				id:3,
				name:'Mate pro 9',
				price:3899,
				count:1
			},
			{
				id:4,
				name:'Xiaomi 6',
				price:2999,
				count:1
			}
		]
	},
	computed:{
		totalPrice:function(){
			var total = 0;
			for (var i=0;i<this.list.length;i++){
				var chart = this.list[i];
				total += chart.price*chart.count;
			}
			return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
		}
	},
	methods:{
		handleReduce:function(index){
			if (this.list[index].count === 1) return ;
			this.list[index].count--;
		},
		handleAdd:function(index){
			this.list[index].count++;
		},
		handleRemove:function(index){
			this.list.splice(index,1);
		}
	}
});