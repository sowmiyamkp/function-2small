let array=[4,6,7,8,10];
function numSmall(array,num)
{
	for(i=0;i<array.length;i++);
{
	      
	for(j=i+1;j<array.length;j++)
	{
		if(array[i]>array[j])
		{
		
				temp=array[j];
				array[j]=array[i];
				array[i]=temp;
		}
	}
}

console.log(array);
let small=array[num-1];
return small;

}
console.log("2nd small number number is"+numSmall(array,2));
