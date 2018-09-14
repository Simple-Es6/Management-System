let list={
    data () {
        return {
            formLabelWidth:'120px',
            radio:'',
            radio1:'',
            radio2:'',
            radio3:'',
            options: [{
                value: '选项1',
                label: '暂不加入'
                }, {
                value: '选项2',
                label: '创世星'
                }, {
                value: '选项3',
                label: '乐享星'
                }],
            optionsType:[{
                value:'选项1',
                label:'公民身份证'
            },{
                value:'选项2',
                label:'护照'
            },{
                value:'选项3',
                label:'港澳居民来往内地通行证'
            },{
                value:'选项4',
                label:'台湾居民来往大陆通行证'
            }],
            value: '',
            value1:'',
            textarea:'',
            options1: [{
                value: '选项1',
                label: '无'
                }, {
                value: '选项2',
                label: '东北机构'
                }, {
                value: '选项3',
                label: '华北机构'
                }, {
                value: '选项4',
                label: '华南机构'
                }, {
                value: '选项5',
                label: '华东机构'
            }],
            rules:{
                singer:[
                    {required: true, message: '歌手名称', trigger: 'blur'},
                    {min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                ],
                stage_name:[
                    {required:true,message:'艺名',trigger:'blur'},
                    {min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur'}
                ],
                name:[
                    {required:true,message:'真实姓名',trigger:'blur'},
                    {min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur'}
                ],
                credentials_type:[
                    {}
                ]

            }
        }
    },
     //组件生成时执行事件
    created:function() {
        
    },
    methods:{
        //验证
        
    }
}
export default list;