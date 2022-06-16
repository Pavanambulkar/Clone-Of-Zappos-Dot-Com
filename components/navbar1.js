function navbar1(){
    return ` <div id="main">
       
    <div id="every">
        <div class="left">
            <select name="" id="customer">
                <option class= "option" value="">Customer Service</option>
                <option class= "option" value="">Contact Info</option>
                <option class= "option" value="">FAQ</option>
                <option class= "option" value="">Give Us Feedback</option>
            </select>
        </div>
        <div id="right">
            <h3> Every Zappos order comes with FAST, FREE Shipping, plus a FREE 365-Day
                Return Policy! <strong>More About Shipping & Returns</strong></h3>
        </div>
    </div>

</div>

<div id="navbar">
    <div>
    <img src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg" id="logo" alt="">
    </div>
    <div id="search_div">
        <input id="input" type="search" placeholder="Search for shoes, clothes, etc." />
        <button>SEARCH</button>
    </div>
    <div id="cart">
      <button id="myCart"  onclick="window.location.href='mycart.html' ">MY CART</button>
    </div>
</div>
 
 

 <nav>


  <ul class="menu-ctn">
    <li id="menu">New
      <ul id="dropdown">
        <li class="dropdown_head">The Find</li>
        <li>The Brightest, Boldest Springs Trends</li>
        <li>Zappos X Beach Riot</li>
        <li>The Ultimate Sneaker Guide</li>
        <li>The Spring Sandal Edit</li>
        <li>Fresh Spring Denim</li>
        <li>Energizing Sporty Looks</li>
        <li>Western-Inspired Wear</li>

      </ul>
      
    </li>
    <li id="menu1">Women
      <ul id="dropdown1">
        <li   class="dropdown_head1">Shoes</li>
      <li id="go"  onclick="window.location.href='womens.html' "> Sneakers & Athletic</li>
      <li onclick="window.location.href='womenShirt.html'"> Shirt and top</li>
      <li> Clogs & Mules</li>
      <li> Heels</li>
      <li> Boots & Booties</li>
      <li> Slippers</li>
      <li> Flats</li>
      <li> Loafers</li>
      <li> Comfort</li>
      <li> Wide</li>
      <li> Narrow</li>
      <li> Single Shoes</li>
      <li> Shop All Shoes</li>
      </ul>
    </li>

    <li id="menu2">Men
      <ul id="dropdown2">
        <li class="dropdown_head2">Shoes</li>
        <li onclick="window.location.href='mens.html' ">Sneakers & Athletic</li>
        <li onclick="window.location.href='menShirt.html'">T-Shirt</li>
        <li>Running Shoes</li>
        <li>Oxfords</li>
        <li>Loafers</li>
        <li>Clogs</li>
        <li>Slippers</li>
      </ul>
    </li>


    <li id="menu3">Kids
      <ul id="dropdown3">
        <li class="dropdown_head3">Girls</li>
      <li>Sneakers</li>
      <li>Sandals</li>
      <li>Swimwear</li>
      <li>Flats</li>
      <li>Shirts & Tops</li>
      <li>Dresses</li>
      <li>Heels</li>
      <li>Shorts</li>
      <li>Clogs</li>
      <li>Light Jackets</li>
      <li>Boots</li>
      <li>Shop All Girls</li>
      </ul>
    </li>

    <li id="menu4">Departments
     
    </li>
    <li id="menu5">Brands</li>
    <li id="menu6">Sale</li>
    <li id="menu7">Clothing</li>
   
  </ul>
  <div id="btn">
    <button  onclick="window.location.href='signpage.html' " id="sign">Sign In/Register</button>
  </div>

  
</nav> 
<div class=movingText>
  <p>
    Be the first to shop the newest home styles - Now on Zappos 
    <strong>Shop Home Now</strong>
  </p>
</div>
`
}
export default navbar1;
