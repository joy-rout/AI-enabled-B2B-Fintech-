import axios from "axios";

export const getData = async() => {
    let response = await axios.get('http://localhost:8080/Highway2HighRadius/getAllData');
    let data = response.data.Data;
    data.map((Data, index) => ({...Data, "id": index}))
    return data;
}


export const AddData = async(business_code,cust_number,clear_date,business_year,doc_id,posting_date,doc_create_date,due_date
    ,invoice_currency,doc_type,pos_id,total_amount,baseline_date,cust_payterm,invoice_id)=>{
    let para = "business_code="+business_code+"&cust_number="+cust_number+"&clear_date="+clear_date+"&buisness_year="+business_year+
    "&doc_id="+doc_id+"&posting_date="+posting_date+"&document_create_date="+doc_create_date+"&due_in_date="+due_date+"&invoice_currency="+invoice_currency+"&document_type="+doc_type+"&posting_id="+pos_id+"&total_open_amount="+total_amount+"&baseline_create_date="+baseline_date+"&cust_payment_terms="+cust_payterm+"&invoice_id="+invoice_id;
    let res = await axios.get("http://localhost:8080/Highway2HighRadius/newData"+para);
    console.log(para);
    return res.data;
}