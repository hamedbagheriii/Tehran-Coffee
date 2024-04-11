function main(){

// ! slider ploign
$(document).ready()
{
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        rtl: true,
        margin: 15,
        nav: false,
        loop: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    });
}

// ! data
function getData(){
    // get btn id
    const allItem=document.getElementById("allItem")
    const btn1=document.getElementById("pishGhaza");
    const btn2=document.getElementById("salad");
    const btn3=document.getElementById("pizza");
    const btn4=document.getElementById("pasta");
    const btn5=document.getElementById("shokhary");
    const btn6=document.getElementById("sandevich");
    const btn7=document.getElementById("pishGhaza");
    const btn8=document.getElementById("pishGhaza");
    const btn9=document.getElementById("pishGhaza");
    const btn10=document.getElementById("pishGhaza");
    const btn11=document.getElementById("pishGhaza");
    const btn12=document.getElementById("pishGhaza");
    const btn13=document.getElementById("pishGhaza");
    const btn14=document.getElementById("pishGhaza");


    //! get data btn 1
    btn1.addEventListener("click",()=>{
        allItem.innerHTML="";
        fetch("/DATA/data.json").then((data)=>{
            return data.json();
        }).then((dataJs)=>{
            const resData=dataJs[0];

            resData.forEach(item => {
                // create element HTML
                var div1=document.createElement("div");
                var div2=document.createElement("div");
                var div3=document.createElement("div");
                var div4=document.createElement("div");
                var title=document.createElement("span");
                var price=document.createElement("span");
                var body=document.createElement("span");
                var hr=document.createElement("hr");

                // set className in Element
                div1.className="col-12";
                if((item.id==1) && (item.body=="NULL")){
                    div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                }                
                else{
                    div2.className="d-flex justify-content-between px-3 pt-2";
                }
                
                div3.className="d-flex px-3 pt-3 pb-2";
                div4.className="divider bg-white";
                hr.className="py-0";
                body.style.fontSize="11px";

                // set innerText in Element
                title.innerText=item.title;
                body.innerText=item.body;
                price.innerText=item.Price;

                // append child in Element
                div1.appendChild(div2);
                div2.appendChild(title);
                div2.appendChild(price);

                if(item.body!="NULL"){
                    div1.appendChild(div3);
                    div3.appendChild(body);
                }

                div1.appendChild(div4);
                if(item.id!==4){
                    div4.appendChild(hr);
                }
                
    
                allItem.appendChild(div1);
            });
        })
    });

    //! get data btn 2
    btn2.addEventListener("click",()=>{
        allItem.innerHTML="";
        fetch("/DATA/data.json").then((data)=>{
            return data.json();
        }).then((dataJs)=>{
            const resData=dataJs[1];

            resData.forEach(item => {
                // create element HTML
                var div1=document.createElement("div");
                var div2=document.createElement("div");
                var div3=document.createElement("div");
                var div4=document.createElement("div");
                var title=document.createElement("span");
                var price=document.createElement("span");
                if(item.body!=="NULL"){
                    var body=document.createElement("span");
                }
                var hr=document.createElement("hr");

                // set className in Element
                div1.className="col-12";
                if((item.id==1) && (item.body=="NULL")){
                    div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                }                
                else{
                    div2.className="d-flex justify-content-between px-3 pt-2";
                }
                
                div3.className="d-flex px-3 pt-3 pb-2";
                div4.className="divider bg-white";
                hr.className="py-0";
                body.style.fontSize="11px";

                // set innerText in Element
                title.innerText=item.title;
                body.innerText=item.body;
                price.innerText=item.Price;

                // append child in Element
                div1.appendChild(div2);
                div2.appendChild(title);
                div2.appendChild(price);

                if(item.body!="NULL"){
                    div1.appendChild(div3);
                    div3.appendChild(body);
                }

                div1.appendChild(div4);
                if(item.id!==3){
                    div4.appendChild(hr);
                }
                
    
                allItem.appendChild(div1);
            });
        })
    });

    //! get data btn 3
    btn3.addEventListener("click",()=>{
        allItem.innerHTML="";
        fetch("/DATA/data.json").then((data)=>{
            return data.json();
        }).then((dataJs)=>{
            const resData=dataJs[2];

            resData.forEach(item => {
                // create element HTML
                var div1=document.createElement("div");
                var div2=document.createElement("div");
                var div3=document.createElement("div");
                var div4=document.createElement("div");
                var title=document.createElement("span");
                var price=document.createElement("span");
                if(item.body!=="NULL"){
                    var body=document.createElement("span");
                }
                var hr=document.createElement("hr");

                // set className in Element
                div1.className="col-12";
                if((item.id==1) && (item.body=="NULL")){
                    div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                }                
                else{
                    div2.className="d-flex justify-content-between px-3 pt-2";
                }
                
                div3.className="d-flex px-3 pt-3 pb-2";
                div4.className="divider bg-white";
                hr.className="py-0";
                body.style.fontSize="11px";

                // set innerText in Element
                title.innerText=item.title;
                body.innerText=item.body;
                price.innerText=item.Price;

                // append child in Element
                div1.appendChild(div2);
                div2.appendChild(title);
                div2.appendChild(price);

                if(item.body!="NULL"){
                    div1.appendChild(div3);
                    div3.appendChild(body);
                }

                div1.appendChild(div4);
                if(item.id!==10){
                    div4.appendChild(hr);
                }
                
    
                allItem.appendChild(div1);
            });
        })
    });

    //! get data btn 4
    btn4.addEventListener("click",()=>{
        allItem.innerHTML="";
        fetch("/DATA/data.json").then((data)=>{
            return data.json();
        }).then((dataJs)=>{
            const resData=dataJs[3];

            resData.forEach(item => {
                // create element HTML
                var div1=document.createElement("div");
                var div2=document.createElement("div");
                var div3=document.createElement("div");
                var div4=document.createElement("div");
                var title=document.createElement("span");
                var price=document.createElement("span");
                if(item.body!=="NULL"){
                    var body=document.createElement("span");
                }
                var hr=document.createElement("hr");

                // set className in Element
                div1.className="col-12";
                if((item.id==1) && (item.body=="NULL")){
                    div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                }                
                else{
                    div2.className="d-flex justify-content-between px-3 pt-2";
                }
               
               div3.className="d-flex px-3 pt-3 pb-2";
               div4.className="divider bg-white";
               hr.className="py-0";
               body.style.fontSize="11px";

               // set innerText in Element
               title.innerText=item.title;
               body.innerText=item.body;
               price.innerText=item.Price;

               // append child in Element
               div1.appendChild(div2);
               div2.appendChild(title);
               div2.appendChild(price);

               if(item.body!="NULL"){
                   div1.appendChild(div3);
                   div3.appendChild(body);
               }

               div1.appendChild(div4);
               if(item.id!==8){
                   div4.appendChild(hr);
               }
               
   
               allItem.appendChild(div1);
            });
        })
    });

    //! get data btn 5
    btn5.addEventListener("click",()=>{
        allItem.innerHTML="";
        fetch("/DATA/data.json").then((data)=>{
            return data.json();
        }).then((dataJs)=>{
            const resData=dataJs[4];

            resData.forEach(item => {
                // create element HTML
                var div1=document.createElement("div");
                var div2=document.createElement("div");
                var div3=document.createElement("div");
                var div4=document.createElement("div");
                var title=document.createElement("span");
                var price=document.createElement("span");
                if(item.body!=="NULL"){
                    var body=document.createElement("span");
                }
                var hr=document.createElement("hr");

                // set className in Element
                div1.className="col-12";
                if((item.id==1) && (item.body=="NULL")){
                    div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                }                
                else{
                    div2.className="d-flex justify-content-between px-3 pt-2";
                }
                
                div3.className="d-flex px-3 pt-3 pb-2";
                div4.className="divider bg-white";
                hr.className="py-0";
                body.style.fontSize="11px";

                // set innerText in Element
                title.innerText=item.title;
                body.innerText=item.body;
                price.innerText=item.Price;

                // append child in Element
                div1.appendChild(div2);
                div2.appendChild(title);
                div2.appendChild(price);

                if(item.body!="NULL"){
                    div1.appendChild(div3);
                    div3.appendChild(body);
                }

                div1.appendChild(div4);
                if(item.id!==3){
                    div4.appendChild(hr);
                }
                
    
                allItem.appendChild(div1);
            });
        })
    });

    //! get data btn 6
    btn6.addEventListener("click",()=>{
        allItem.innerHTML="";
        fetch("/DATA/data.json").then((data)=>{
            return data.json();
        }).then((dataJs)=>{
            const resData=dataJs[5];

            resData.forEach(item => {
                // create element HTML
                var div1=document.createElement("div");
                var div2=document.createElement("div");
                var div3=document.createElement("div");
                var div4=document.createElement("div");
                var title=document.createElement("span");
                var price=document.createElement("span");
                if(item.body!=="NULL"){
                    var body=document.createElement("span");
                }
                var hr=document.createElement("hr");

                // set className in Element
                div1.className="col-12";
                if((item.id==1) && (item.body=="NULL")){
                    div2.className="d-flex justify-content-between px-3 pt-4 pb-3";
                }                
                else{
                    div2.className="d-flex justify-content-between px-3 pt-2";
                }
                
                div3.className="d-flex px-3 pt-3 pb-2";
                div4.className="divider bg-white";
                hr.className="py-0";
                body.style.fontSize="11px";

                // set innerText in Element
                title.innerText=item.title;
                body.innerText=item.body;
                price.innerText=item.Price;

                // append child in Element
                div1.appendChild(div2);
                div2.appendChild(title);
                div2.appendChild(price);

                if(item.body!="NULL"){
                    div1.appendChild(div3);
                    div3.appendChild(body);
                }

                div1.appendChild(div4);
                if(item.id!==11){
                    div4.appendChild(hr);
                }
                
    
                allItem.appendChild(div1);
            });
        })
    });


























}
getData()












}
main()