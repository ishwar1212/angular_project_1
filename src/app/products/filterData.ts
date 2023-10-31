export const filters =[
    {
        id:"color",
        name:"Color",
        options:[
            {value:"white", label:"White"},
            {value:"beige", label:"Beige"},
            {value:"blue", label:"Blue"},
            {value:"brown", label:"Brown"},
            {value:"green", label:"Green"},
            {value:"purple", label:"Purple"},
            {value:"yellow", label:"Yellow"},
        ],
    },
 
];

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"5999-9999", label:"₹5,999-₹9,999"},
            {value:"9999-14999", label:"₹9,999-₹14,999"},
            {value:"14999-19999", label:"₹14,999-₹19,999"},
            {value:"19999-29999", label:"₹19,999-₹29,999"},
            {value:"29999-49999", label:"₹29,999-₹49,999"},
            {value:"49999-99999", label:"₹49,999-₹99,999"},
            {value:"99999-149999", label:"₹99,999-₹1,49,999"}


        ],
    },
    {
        id:"disccount",
        name:"Disccount",
        options:[
            { value:"10",label:"10% And Above" },
            {value:"20",label:"20% And Above" },
            {value:"30",label:"30% And Above" },
            {value:"40",label:"40% And Above" },
            {value:"50",label:"50% And Above" },
        ]
    },
    {
        id:"stock",
        name:"stock",
        options:[
            {value:"in_stock",label:"In Stock" },
            {value:"out_of_stock",label:"Out Of Stock"}
        ]
    }
]