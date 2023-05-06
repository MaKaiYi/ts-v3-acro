export interface tableColumn{
	title: string,
	dataIndex:string
}

export interface User{
	name: String,
	age: number,
	moxi: String,
	dataTime:Date
}

export const colums: tableColumn[] = [
	{
	title: 'Name',
	dataIndex:'name'
	},
	{
	title: 'Age',
	dataIndex:'age'
	},
	{
		title: '摩西',
		dataIndex:'moxi'
	}, {
		title: '创建时间',
		dataIndex:'dataTime'
	}
]

export const data: User[] = [
	{ name: '张三', age: 13 ,moxi:'描述一段文字',dataTime:new Date()},
	{ name: '李四', age: 13 ,moxi:'描述一段文字',dataTime:new Date()},
	{name:'王麻子',age:13,moxi:'描述一段文字',dataTime:new Date()},
]
