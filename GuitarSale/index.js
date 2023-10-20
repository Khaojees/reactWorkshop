/*var product = [{
            id:1,
            img:'img/Fender_eComm_ShopCard_NewReleases_squier_sonic@2x.jpg',
            name:'Fender',
            price:24000,
            description:'Fender Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias omnis soluta ratione necessitatibus cupiditate odit dignissimos libero non esse! Quos.',
            type:'Electric'
      },{
            id:2,
            img:'img/elec gibson.jpg',
            name:'Gibson',
            price:98000,
            description:'Gibson Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias omnis soluta ratione necessitatibus cupiditate odit dignissimos libero non esse! Quos.',
            type:'Electric'
      },{
            id:3,
            img:'img/Taylor-Custom-GS-1208231128-Gallery-01-2022.jpg',
            name:'Taylor',
            price:65000,
            description:'Taylor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias omnis soluta ratione necessitatibus cupiditate odit dignissimos libero non esse! Quos.',
            type:'Acoustic'
      }];*/
      var product
      $(document).ready(() => {
            $.ajax({
                  method: 'get',
                  url: './api/getallproduct.php',
                  success: function(response) {
                      console.log(response)
                      if(response.RespCode == 200) {
          
                          product = response.Result;
                              var html = '';
                              for(let i=0; i<product.length; i++){
                                    html += `<div onclick="openproduct(${i})" class="product-item ${product[i].type}">
                                                <img src="./img/${product[i].img}" class="productimg">
                                                <p class="pdsize">${product[i].name}</p>
                                                <p class="prisize">${numberWithCommas(product[i].price)} THB</p>
                                          </div>`;
                              }
                              $("#productlist").html(html);
                        }
                        }, error: function(err) {
                        console.log(err)
                  }
            })
      })


      function numberWithCommas(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        }

      function searchsomething(elem){
           var value = $('#'+elem.id).val()
           //console.log(value)
          
           var html = '';
            for(let i=0; i<product.length; i++){
                  if(product[i].name.includes(value)){
                        html += `<div onclick="openproduct(${i})" class="product-item ${product[i].type}">
                              <img src="./img/${product[i].img}" class="productimg">
                              <p class="pdsize">${product[i].name}</p>
                              <p class="prisize">${numberWithCommas(product[i].price)} THB</p>
                           </div>`;
                  } 
            }
            if(html == ''){
                  $("#productlist").html(`Not Found product`);
            }else{
                  $("#productlist").html(html);
            }
            
           
      }

      function searchproduct(y){
            var html = '';
            for(let i=0; i<product.length; i++){
                  if(product[i].type == y || y=='all'){
                        html += `<div onclick="openproduct(${i})" class="product-item ${product[i].type}">
                              <img src="./img/${product[i].img}" class="productimg">
                              <p class="pdsize">${product[i].name}</p>
                              <p class="prisize">${numberWithCommas(product[i].price)} THB</p>
                           </div>`;
                  } 
            }
            $("#productlist").html(html);

      }

      
      /*//หรือใช้ฟังก์ชันนี้ #=use id/  .=use class
      function searchproduct(param) {
            //console.log(param)
            $(".product-item").css('display', 'none') 
            if(param == 'all') {
                $(".product-item").css('display', 'block')
            }
            else {
                $("."+param).css('display', 'block')
            }
        }*/
var productindex = 0;
        function openproduct(z){
            productindex=z;
            console.log(productindex)
            $("#modaldsc").css('display', 'flex')
            $("#mdd-img").attr('src',product[z].img)
            $("#mdd-productname").text(product[z].name)
            $("#mdd-price").text(numberWithCommas(product[z].price)+' THB')
            $("#mdd-description").text(product[z].description)
            
        }

        function closemodaldsc(){
            $(".modal").css('display', 'none')
        }

        var cart=[];
        function addtocart(){
            var pass = true;
            for (let i = 0; i < cart.length; i++) {
                  if(productindex == cart[i].index){
                        cart[i].count++;
                        console.log('found same product')
                        pass = false;
                  }
            }
            if(pass){
                  var obj ={
                        index: productindex,
                        id: product[productindex].id,
                        name: product[productindex].name,
                        price: product[productindex].price,
                        img: product[productindex].img,
                        count: 1
                  };
                  cart.push(obj)
            }
            console.log(cart)
            Swal.fire({
                  icon: 'success',
                  title: 'Add' + product[productindex] + 'to cart!'
            })
            $('#cartcount').css('display','flex').text(cart.length)

        }

        function opencart(){
            $('#madalcart').css('display','flex')
            rendercart();
        }

        function rendercart(){
            if (cart.length>0) {
                  var html = '';
                  for (let i = 0; i < cart.length; i++) {
                       html +=`<div class="cartlist">
                                    <div id="mycart" class="cartlist-item">
                                          <div class="cartleft">
                                                <img src="./img/${cart[i].img}" alt="">
                                                <div class="cartlist-detial">
                                                      <p style="font-size: 1.5vw;">${cart[i].name}</p>
                                                      <p style="font-size: 1.2vw;">${numberWithCommas(cart[i].price*cart[i].count)} THB</p>
                                                </div>
                                          </div>
                                          <div class="cartright">
                                                <p onclick="deinitem('-',${i})" class="btnc">-</p>
                                                <p id="countitem${i}" style="margin: 0 10px;">${cart[i].count}</p>
                                                <p onclick="deinitem('+',${i})" class="btnc">+</p>
                                                <button onclick="deleteitem(${i})" class="btn btn-buy">Delete</button>
                                          </div>
                                    </div>
                              </div>`;    
                  }
                  $('#mycart').html(html)
            } else {
                  $('#mycart').html(`Not found product`)
            }
        }

        function deleteitem(index){
            //console.log(cart)
            cart[index].count=0;
            cart.splice(index,1)
            //console.log(cart)
            rendercart();
        }

        function deinitem(action,index){
            if(action=='-'){
                  if(cart[index].count > 0){
                        cart[index].count--;
                        $("#countitem"+index).text(cart[index].count)
                        if (cart[index].count <=0) {
                              Swal.fire({
                                    icon: 'warning',
                                    title: 'Are you sure to delete?',
                                    showConfirmButton: true,
                                    showCancelButton: true,
                                    confirmButtonText: 'Delete',
                                    cancelButtonText: 'Cancel'
                              }).then((res) => {
                                    if(res.isConfirmed){
                                          cart.splice(index,1)
                                          console.log(cart)
                                          rendercart();
                                          $("#cartcount").css('display', 'flex').text(cart.length)
                                                                                                 
                                          if (cart.length <=0) {
                                                $("#cartcount").css('display', 'none')
                                          }
                                    }
                                    else{
                                          cart[index].count++;
                                          $("#cartcount"+index).text(cart.length)
                                          rendercart();
                                    }
                              })
                        }
                        rendercart();
                  }
            }
            if(action == '+') {
                  cart[index].count++;
                  $("#countitems"+index).text(cart[index].count)
                  rendercart();
        }
      }
      