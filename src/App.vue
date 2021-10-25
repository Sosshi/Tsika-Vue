<template>
  <header id="header" class="header-area style-01 layout-03">
    <div class="header-top bg-main hidden-xs">
      <div class="container">
        <div class="top-bar left">
          <ul class="horizontal-menu">
            <li>
              <a href="#"
                ><i class="fa fa-envelope" aria-hidden="true"></i
                >sales@tsikaexpress.com</a
              >
            </li>
            <li>
              <a href="#">Free Shipping for all Order of above MK100, 000</a>
            </li>
          </ul>
        </div>
        <div class="top-bar right">
          <ul class="social-list">
            <li>
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header-middle biolife-sticky-object">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-2 col-md-6 col-xs-6">
            <a href="home-03-green.html" class="biolife-logo"
              ><img
                src="./assets/assets/images/organic-3-green.png"
                alt="biolife logo"
                width="135"
                height="36"
            /></a>
          </div>
          <div class="col-lg-6 col-md-7 hidden-sm hidden-xs">
            <div class="primary-menu">
              <ul
                class="menu biolife-menu clone-main-menu clone-primary-menu"
                id="primary-menu"
                data-menuname="main menu"
              >
                <li class="menu-item">
                  <router-link to="/">Home</router-link>
                </li>
                <li class="menu-item">
                  <router-link to="/women">Women</router-link>
                </li>
                <li class="menu-item">
                  <router-link to="/men">Men</router-link>
                </li>
                <li class="menu-item">
                  <router-link to="/kids">Kids</router-link>
                </li>
                <li class="menu-item">
                  <router-link to="/electronics">Electronics</router-link>
                </li>
                <li class="menu-item">
                  <router-link to="/unique-collections"
                    >Unique Collections</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-md-6 col-xs-6">
            <div class="biolife-cart-info">
              <div class="mobile-search">
                <a href="javascript:void(0)" class="open-searchbox"
                  ><i class="biolife-icon icon-search"></i
                ></a>
                <div class="mobile-search-content">
                  <form
                    action="#"
                    class="form-search"
                    name="mobile-seacrh"
                    method="get"
                  >
                    <a href="#" class="btn-close"
                      ><span class="biolife-icon icon-close-menu"></span
                    ></a>
                    <input
                      type="text"
                      name="s"
                      class="input-text"
                      value=""
                      placeholder="Search here..."
                    />
                    <select name="category">
                      <option value="-1" selected>All Categories</option>
                      <option value="vegetables">Vegetables</option>
                      <option value="fresh_berries">Fresh Berries</option>
                      <option value="ocean_foods">Ocean Foods</option>
                      <option value="butter_eggs">Butter & Eggs</option>
                      <option value="fastfood">Fastfood</option>
                      <option value="fresh_meat">Fresh Meat</option>
                      <option value="fresh_onion">Fresh Onion</option>
                      <option value="papaya_crisps">Papaya & Crisps</option>
                      <option value="oatmeal">Oatmeal</option>
                    </select>
                    <button type="submit" class="btn-submit">go</button>
                  </form>
                </div>
              </div>
              <div class="wishlist-block hidden-sm hidden-xs">
                <a href="#" class="link-to">
                  <span class="icon-qty-combine">
                    <i class="icon-heart-bold biolife-icon"></i>
                    <span class="qty">4</span>
                  </span>
                </a>
              </div>
              <div class="minicart-block">
                <div class="minicart-contain">
                  <a href="javascript:void(0)" class="link-to">
                    <span class="icon-qty-combine">
                      <i class="icon-cart-mini biolife-icon"></i>
                      <span class="qty">{{
                        this.$store.state.cart.length
                      }}</span>
                    </span>
                    <span class="title">My Cart </span>
                    <span class="sub-total"
                      >MK {{ this.$store.getters.totalPrice }}</span
                    >
                  </a>
                  <div
                    class="cart-content"
                    v-if="this.$store.state.cart.length"
                  >
                    <div class="cart-inner">
                      <ul class="products">
                        <li
                          v-for="(product, index) in cartItems"
                          :key="product.id"
                        >
                          <div class="minicart-item">
                            <div class="thumb">
                              <a href="#"
                                ><img
                                  :src="getImageUrl(product.images[0].image)"
                                  width="90"
                                  height="90"
                                  alt="National Fresh"
                              /></a>
                            </div>
                            <div class="left-info">
                              <div class="product-title">
                                <a href="#" class="product-name">{{
                                  product.name
                                }}</a>
                              </div>
                              <div class="price">
                                <ins
                                  ><span class="price-amount"
                                    ><span class="currencySymbol">MK</span
                                    >{{ product.price - 1000 }}</span
                                  ></ins
                                >
                                <del
                                  ><span class="price-amount"
                                    ><span class="currencySymbol">£</span
                                    >{{ product.price }}</span
                                  ></del
                                >
                              </div>
                            </div>
                            <div class="action">
                              <a @click="removeFromCart(index)" href="#">
                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <p class="btn-control">
                        <router-link class="btn view-cart" to="/cart"
                          >view cart</router-link
                        >
                        <button class="btn" @click="checkout">
                          view Checkout
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mobile-menu-toggle">
                <a
                  class="btn-toggle"
                  data-object="open-mobile-menu"
                  href="javascript:void(0)"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom hidden-sm hidden-xs">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4">
            <div class="vertical-menu vertical-category-block">
              <div class="block-title">
                <span class="menu-icon">
                  <span class="line-1"></span>
                  <span class="line-2"></span>
                  <span class="line-3"></span>
                </span>
                <span class="menu-title">All departments</span>
                <span class="angle" data-tgleclass="fa fa-caret-down"
                  ><i class="fa fa-caret-up" aria-hidden="true"></i
                ></span>
              </div>
              <div class="wrap-menu">
                <ul class="menu clone-main-menu">
                  <li class="menu-item menu-item-has-children has-megamenu">
                    <a href="#" class="menu-name" data-title="Fruit & Nut Gifts"
                      ><i class="biolife-icon icon-fruits"></i>Fruit & Nut
                      Gifts</a
                    >
                    <div class="wrap-megamenu lg-width-900 md-width-640">
                      <div class="mega-content">
                        <div class="row">
                          <div
                            class="
                              col-lg-3 col-md-4 col-sm-12
                              xs-margin-bottom-25
                              md-margin-bottom-0
                            "
                          >
                            <div class="wrap-custom-menu vertical-menu">
                              <h4 class="menu-title">Fresh Fuits</h4>
                              <ul class="menu">
                                <li><a href="#">Fruit & Nut Gifts</a></li>
                                <li><a href="#">Mixed Fruits</a></li>
                                <li><a href="#">Oranges</a></li>
                                <li><a href="#">Bananas & Plantains</a></li>
                                <li><a href="#">Fresh Gala Apples</a></li>
                                <li><a href="#">Berries</a></li>
                                <li><a href="#">Pears</a></li>
                                <li><a href="#">Produce</a></li>
                                <li><a href="#">Snack Foods</a></li>
                              </ul>
                            </div>
                          </div>
                          <div
                            class="
                              col-lg-3 col-md-4 col-sm-12
                              lg-padding-left-23
                              xs-margin-bottom-25
                              md-margin-bottom-0
                            "
                          >
                            <div class="wrap-custom-menu vertical-menu">
                              <h4 class="menu-title">Nut Gifts</h4>
                              <ul class="menu">
                                <li>
                                  <a href="#">Non-Dairy Coffee Creamers</a>
                                </li>
                                <li><a href="#">Coffee Creamers</a></li>
                                <li><a href="#">Mayonnaise</a></li>
                                <li><a href="#">Almond Milk</a></li>
                                <li><a href="#">Ghee</a></li>
                                <li><a href="#">Beverages</a></li>
                                <li><a href="#">Ranch Salad Dressings</a></li>
                                <li><a href="#">Hemp Milk</a></li>
                                <li><a href="#">Nuts & Seeds</a></li>
                              </ul>
                            </div>
                          </div>
                          <div
                            class="
                              col-lg-6 col-md-4 col-sm-12
                              lg-padding-left-50
                              xs-margin-bottom-25
                              md-margin-bottom-0
                            "
                          >
                            <div class="biolife-products-block max-width-270">
                              <h4 class="menu-title">Bestseller Products</h4>
                              <ul
                                class="
                                  products-list
                                  default-product-style
                                  biolife-carousel
                                  nav-none-after-1k2 nav-center
                                "
                                data-slick='{"rows":1,"arrows":true,"dots":false,"infinite":false,"speed":400,"slidesMargin":30,"slidesToShow":1, "responsive":[{"breakpoint":767, "settings":{ "arrows": false}}]}'
                              >
                                <li class="product-item">
                                  <div class="contain-product none-overlay">
                                    <div class="product-thumb">
                                      <a href="#" class="link-to-product">
                                        <img
                                          src="./assets/assets/images/products/p-08.jpg"
                                          alt="dd"
                                          width="270"
                                          height="270"
                                          class="product-thumnail"
                                        />
                                      </a>
                                    </div>
                                    <div class="info">
                                      <b class="categories">Fresh Fruit</b>
                                      <h4 class="product-title">
                                        <a href="#" class="pr-name"
                                          >National Fresh Fruit</a
                                        >
                                      </h4>
                                      <div class="price">
                                        <ins
                                          ><span class="price-amount"
                                            ><span class="currencySymbol"
                                              >£</span
                                            >85.00</span
                                          ></ins
                                        >
                                        <del
                                          ><span class="price-amount"
                                            ><span class="currencySymbol"
                                              >£</span
                                            >95.00</span
                                          ></del
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li class="product-item">
                                  <div class="contain-product none-overlay">
                                    <div class="product-thumb">
                                      <a href="#" class="link-to-product">
                                        <img
                                          src="./assets/assets/images/products/p-11.jpg"
                                          alt="dd"
                                          width="270"
                                          height="270"
                                          class="product-thumnail"
                                        />
                                      </a>
                                    </div>
                                    <div class="info">
                                      <b class="categories">Fresh Fruit</b>
                                      <h4 class="product-title">
                                        <a href="#" class="pr-name"
                                          >National Fresh Fruit</a
                                        >
                                      </h4>
                                      <div class="price">
                                        <ins
                                          ><span class="price-amount"
                                            ><span class="currencySymbol"
                                              >£</span
                                            >85.00</span
                                          ></ins
                                        >
                                        <del
                                          ><span class="price-amount"
                                            ><span class="currencySymbol"
                                              >£</span
                                            >95.00</span
                                          ></del
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li class="product-item">
                                  <div class="contain-product none-overlay">
                                    <div class="product-thumb">
                                      <a href="#" class="link-to-product">
                                        <img
                                          src="./assets/assets/images/products/p-15.jpg"
                                          alt="dd"
                                          width="270"
                                          height="270"
                                          class="product-thumnail"
                                        />
                                      </a>
                                    </div>
                                    <div class="info">
                                      <b class="categories">Fresh Fruit</b>
                                      <h4 class="product-title">
                                        <a href="#" class="pr-name"
                                          >National Fresh Fruit</a
                                        >
                                      </h4>
                                      <div class="price">
                                        <ins
                                          ><span class="price-amount"
                                            ><span class="currencySymbol"
                                              >£</span
                                            >85.00</span
                                          ></ins
                                        >
                                        <del
                                          ><span class="price-amount"
                                            ><span class="currencySymbol"
                                              >£</span
                                            >95.00</span
                                          ></del
                                        >
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div
                            class="
                              col-lg-12 col-md-12 col-sm-12
                              md-margin-top-9
                            "
                          >
                            <div class="biolife-brand">
                              <ul class="brands">
                                <li>
                                  <a href="#"
                                    ><img
                                      src="./assets/assets/images/megamenu/brand-organic.png"
                                      width="161"
                                      height="136"
                                      alt="organic"
                                  /></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="./assets/assets/images/megamenu/brand-explore.png"
                                      width="160"
                                      height="136"
                                      alt="explore"
                                  /></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="./assets/assets/images/megamenu/brand-organic-2.png"
                                      width="99"
                                      height="136"
                                      alt="organic 2"
                                  /></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="./assets/assets/images/megamenu/brand-eco-teas.png"
                                      width="164"
                                      height="136"
                                      alt="eco teas"
                                  /></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item menu-item-has-children has-megamenu">
                    <a href="#" class="menu-name" data-title="Vegetables"
                      ><i class="biolife-icon icon-broccoli-1"></i>Vegetables</a
                    >
                    <div
                      class="
                        wrap-megamenu
                        lg-width-900
                        md-width-640
                        background-mega-01
                      "
                    >
                      <div class="mega-content">
                        <div class="row">
                          <div
                            class="
                              col-lg-3 col-md-4 col-sm-12
                              xs-margin-bottom-25
                              md-margin-bottom-0
                            "
                          >
                            <div class="wrap-custom-menu vertical-menu">
                              <h4 class="menu-title">Vegetables</h4>
                              <ul class="menu">
                                <li><a href="#">Fruit & Nut Gifts</a></li>
                                <li><a href="#">Mixed Fruits</a></li>
                                <li><a href="#">Oranges</a></li>
                                <li><a href="#">Bananas & Plantains</a></li>
                                <li><a href="#">Fresh Gala Apples</a></li>
                                <li><a href="#">Berries</a></li>
                                <li><a href="#">Pears</a></li>
                                <li><a href="#">Produce</a></li>
                                <li><a href="#">Snack Foods</a></li>
                              </ul>
                            </div>
                          </div>
                          <div
                            class="
                              col-lg-4 col-md-4 col-sm-12
                              lg-padding-left-23
                              xs-margin-bottom-25
                              md-margin-bottom-0
                            "
                          >
                            <div class="wrap-custom-menu vertical-menu">
                              <h4 class="menu-title">Gifts</h4>
                              <ul class="menu">
                                <li>
                                  <a href="#">Non-Dairy Coffee Creamers</a>
                                </li>
                                <li><a href="#">Coffee Creamers</a></li>
                                <li><a href="#">Mayonnaise</a></li>
                                <li><a href="#">Almond Milk</a></li>
                                <li><a href="#">Ghee</a></li>
                                <li><a href="#">Beverages</a></li>
                                <li><a href="#">Ranch Salad Dressings</a></li>
                                <li><a href="#">Hemp Milk</a></li>
                                <li><a href="#">Nuts & Seeds</a></li>
                              </ul>
                            </div>
                          </div>
                          <div
                            class="
                              col-lg-5 col-md-4 col-sm-12
                              lg-padding-left-57
                              md-margin-bottom-30
                            "
                          >
                            <div
                              class="biolife-brand vertical md-boder-left-30"
                            >
                              <h4 class="menu-title">Hot Brand</h4>
                              <ul class="brands">
                                <li>
                                  <a href="#"
                                    ><img
                                      src="./assets/assets/images/megamenu/v-brand-organic.png"
                                      width="167"
                                      height="74"
                                      alt="organic"
                                  /></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="./assets/assets/images/megamenu/v-brand-explore.png"
                                      width="167"
                                      height="72"
                                      alt="explore"
                                  /></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="./assets/assets/images/megamenu/v-brand-organic-2.png"
                                      width="167"
                                      height="99"
                                      alt="organic 2"
                                  /></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><img
                                      src="./assets/assets/images/megamenu/v-brand-eco-teas.png"
                                      width="167"
                                      height="67"
                                      alt="eco teas"
                                  /></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item menu-item-has-children has-megamenu">
                    <a href="#" class="menu-name" data-title="Fresh Berries"
                      ><i class="biolife-icon icon-grape"></i>Fresh Berries</a
                    >
                    <div
                      class="
                        wrap-megamenu
                        lg-width-900
                        md-width-640
                        background-mega-02
                      "
                    >
                      <div class="mega-content">
                        <div class="row">
                          <div
                            class="
                              col-lg-3 col-md-4
                              sm-col-12
                              md-margin-bottom-83
                              xs-margin-bottom-25
                            "
                          >
                            <div class="wrap-custom-menu vertical-menu">
                              <h4 class="menu-title">Fresh Berries</h4>
                              <ul class="menu">
                                <li><a href="#">Fruit & Nut Gifts</a></li>
                                <li><a href="#">Mixed Fruits</a></li>
                                <li><a href="#">Oranges</a></li>
                                <li><a href="#">Bananas & Plantains</a></li>
                                <li><a href="#">Fresh Gala Apples</a></li>
                                <li><a href="#">Berries</a></li>
                                <li><a href="#">Pears</a></li>
                                <li><a href="#">Produce</a></li>
                                <li><a href="#">Snack Foods</a></li>
                              </ul>
                            </div>
                          </div>
                          <div
                            class="
                              col-lg-3 col-md-4
                              sm-col-12
                              lg-padding-left-23
                              xs-margin-bottom-36px
                              md-margin-bottom-0
                            "
                          >
                            <div class="wrap-custom-menu vertical-menu">
                              <h4 class="menu-title">Gifts</h4>
                              <ul class="menu">
                                <li>
                                  <a href="#">Non-Dairy Coffee Creamers</a>
                                </li>
                                <li><a href="#">Coffee Creamers</a></li>
                                <li><a href="#">Mayonnaise</a></li>
                                <li><a href="#">Almond Milk</a></li>
                                <li><a href="#">Ghee</a></li>
                                <li><a href="#">Beverages</a></li>
                                <li><a href="#">Ranch Salad Dressings</a></li>
                                <li><a href="#">Hemp Milk</a></li>
                                <li><a href="#">Nuts & Seeds</a></li>
                              </ul>
                            </div>
                          </div>
                          <div
                            class="
                              col-lg-6 col-md-4
                              sm-col-12
                              lg-padding-left-25
                              md-padding-top-55
                            "
                          >
                            <div class="biolife-banner layout-01">
                              <h3 class="top-title">Farm Fresh</h3>
                              <p class="content">
                                All the Lorem Ipsum generators on the Internet
                                tend.
                              </p>
                              <b class="bottomm-title">Berries Series</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="menu-name" data-title="Ocean Foods"
                      ><i class="biolife-icon icon-fish"></i>Ocean Foods</a
                    >
                  </li>
                  <li class="menu-item menu-item-has-children has-child">
                    <a href="#" class="menu-name" data-title="Butter & Eggs"
                      ><i class="biolife-icon icon-honey"></i>Butter & Eggs</a
                    >
                    <ul class="sub-menu">
                      <li class="menu-item"><a href="#">Omelettes</a></li>
                      <li class="menu-item">
                        <a href="#">Breakfast Scrambles</a>
                      </li>
                      <li class="menu-item menu-item-has-children has-child">
                        <a
                          href="#"
                          class="menu-name"
                          data-title="Eggs & other considerations"
                          >Eggs & other considerations</a
                        >
                        <ul class="sub-menu">
                          <li class="menu-item">
                            <a href="#">Classic Breakfast</a>
                          </li>
                          <li class="menu-item">
                            <a href="#">Huevos Rancheros</a>
                          </li>
                          <li class="menu-item">
                            <a href="#">Everything Egg Sandwich</a>
                          </li>
                          <li class="menu-item">
                            <a href="#">Egg Sandwich</a>
                          </li>
                          <li class="menu-item">
                            <a href="#">Vegan Burrito</a>
                          </li>
                          <li class="menu-item">
                            <a href="#">Biscuits and Gravy</a>
                          </li>
                          <li class="menu-item">
                            <a href="#">Bacon Avo Egg Sandwich</a>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item"><a href="#">Griddle</a></li>
                      <li class="menu-item menu-item-has-children has-child">
                        <a
                          href="#"
                          class="menu-name"
                          data-title="Sides & Extras"
                          >Sides & Extras</a
                        >
                        <ul class="sub-menu">
                          <li class="menu-item">
                            <a href="#">Breakfast Burrito</a>
                          </li>
                          <li class="menu-item">
                            <a href="#">Crab Cake Benedict</a>
                          </li>
                          <li class="menu-item">
                            <a href="#">Corned Beef Hash</a>
                          </li>
                          <li class="menu-item">
                            <a href="#">Steak & Eggs</a>
                          </li>
                          <li class="menu-item"><a href="#">Oatmeal</a></li>
                          <li class="menu-item">
                            <a href="#">Fruit & Yogurt Parfait</a>
                          </li>
                        </ul>
                      </li>
                      <li class="menu-item"><a href="#">Biscuits</a></li>
                      <li class="menu-item">
                        <a href="#">Seasonal Fruit Plate</a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="menu-title"
                      ><i class="biolife-icon icon-fast-food"></i>Fastfood</a
                    >
                  </li>
                  <li class="menu-item">
                    <a href="#" class="menu-title"
                      ><i class="biolife-icon icon-beef"></i>Fresh Meat</a
                    >
                  </li>
                  <li class="menu-item">
                    <a href="#" class="menu-title"
                      ><i class="biolife-icon icon-onions"></i>Fresh Onion</a
                    >
                  </li>
                  <li class="menu-item">
                    <a href="#" class="menu-title"
                      ><i class="biolife-icon icon-avocado"></i>Papaya &
                      Crisps</a
                    >
                  </li>
                  <li class="menu-item">
                    <a href="#" class="menu-title"
                      ><i class="biolife-icon icon-contain"></i>Oatmeal</a
                    >
                  </li>
                  <li class="menu-item">
                    <a href="#" class="menu-title"
                      ><i class="biolife-icon icon-fresh-juice"></i>Fresh
                      Bananas & Plantains</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-8 padding-top-2px">
            <div class="header-search-bar layout-01">
              <form
                action="#"
                class="form-search"
                name="desktop-seacrh"
                method="get"
              >
                <input
                  type="text"
                  name="s"
                  class="input-text"
                  value=""
                  placeholder="Search here..."
                />
                <select name="category">
                  <option value="-1" selected>All Categories</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="fresh_berries">Fresh Berries</option>
                  <option value="ocean_foods">Ocean Foods</option>
                  <option value="butter_eggs">Butter & Eggs</option>
                  <option value="fastfood">Fastfood</option>
                  <option value="fresh_meat">Fresh Meat</option>
                  <option value="fresh_onion">Fresh Onion</option>
                  <option value="papaya_crisps">Papaya & Crisps</option>
                  <option value="oatmeal">Oatmeal</option>
                </select>
                <button type="submit" class="btn-submit">
                  <i class="biolife-icon icon-search"></i>
                </button>
              </form>
            </div>
            <div class="live-info">
              <p class="telephone">
                <i class="fa fa-phone" aria-hidden="true"></i
                ><b class="phone-number">(+900) 123 456 7891</b>
              </p>
              <p class="working-time">
                Mon-Fri: 8:30am-7:30pm; Sat-Sun: 9:30am-4:30pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="page-contain">
    <div id="main-content" class="main-content"><router-view /></div>
  </div>

  <!--Footer For Mobile-->
  <div class="mobile-footer">
    <div class="mobile-footer-inner">
      <div class="mobile-block block-menu-main">
        <a
          class="menu-bar menu-toggle btn-toggle"
          data-object="open-mobile-menu"
          href="javascript:void(0)"
        >
          <span class="fa fa-bars"></span>
          <span class="text">Menu</span>
        </a>
      </div>
      <div class="mobile-block block-sidebar">
        <a
          class="menu-bar filter-toggle btn-toggle"
          data-object="open-mobile-filter"
          href="javascript:void(0)"
        >
          <i class="fa fa-sliders" aria-hidden="true"></i>
          <span class="text">Sidebar</span>
        </a>
      </div>
      <div class="mobile-block block-minicart">
        <a class="link-to-cart" href="#">
          <span class="fa fa-shopping-bag" aria-hidden="true"></span>
          <span class="text">Cart</span>
        </a>
      </div>
      <div class="mobile-block block-global">
        <a
          class="menu-bar myaccount-toggle btn-toggle"
          data-object="global-panel-opened"
          href="javascript:void(0)"
        >
          <span class="fa fa-globe"></span>
          <span class="text">Global</span>
        </a>
      </div>
    </div>
  </div>

  <div class="mobile-block-global">
    <div class="biolife-mobile-panels">
      <span class="biolife-current-panel-title">Global</span>
      <a class="biolife-close-btn" data-object="global-panel-opened" href="#"
        >&times;</a
      >
    </div>
    <div class="block-global-contain">
      <div class="glb-item my-account">
        <b class="title">My Account</b>
        <ul class="list">
          <li class="list-item"><a href="#">Login/register</a></li>
          <li class="list-item">
            <a href="#">Wishlist <span class="index">(8)</span></a>
          </li>
          <li class="list-item"><a href="#">Checkout</a></li>
        </ul>
      </div>
      <div class="glb-item currency">
        <b class="title">Currency</b>
        <ul class="list">
          <li class="list-item"><a href="#">€ EUR (Euro)</a></li>
          <li class="list-item"><a href="#">$ USD (Dollar)</a></li>
          <li class="list-item"><a href="#">£ GBP (Pound)</a></li>
          <li class="list-item"><a href="#">¥ JPY (Yen)</a></li>
        </ul>
      </div>
      <div class="glb-item languages">
        <b class="title">Language</b>
        <ul class="list inline">
          <li class="list-item">
            <a href="#"
              ><img
                src="assets/images/languages/us.jpg"
                alt="flag"
                width="24"
                height="18"
            /></a>
          </li>
          <li class="list-item">
            <a href="#"
              ><img
                src="assets/images/languages/fr.jpg"
                alt="flag"
                width="24"
                height="18"
            /></a>
          </li>
          <li class="list-item">
            <a href="#"
              ><img
                src="assets/images/languages/ger.jpg"
                alt="flag"
                width="24"
                height="18"
            /></a>
          </li>
          <li class="list-item">
            <a href="#"
              ><img
                src="assets/images/languages/jap.jpg"
                alt="flag"
                width="24"
                height="18"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</template>

<script>
export default {
  name: "App",
  methods: {
    checkout() {
      if (this.$store.state.token) {
        this.$router.push("/checkout");
      } else {
        this.$router.push("login");
      }
    },
    getImageUrl(url) {
      url = "http://127.0.0.1:8000/media" + url.slice(21);
      return url;
    },

    removeFromCart(position) {
      return this.$store.commit("removeItem", position);
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.cart;
    },
  },
};
</script>
<style>
</style>
