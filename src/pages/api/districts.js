export default function handler(req, res) {
  const data = {
    SukhBaatar: [
      {
        company_name: "Suzuki Mongolia LLC",
        rating: 4.5,
        industry: "Automotive",
        latitude: 47.91676704622774,
        longitude: 106.95500380039137,
        image_link: "https://logowik.com/content/uploads/images/197_suzuki.jpg",
      },
      {
        company_name: "National Culture and Recreation Institute",
        rating: 4.2,
        industry: "Parking",
        latitude: 47.90979041361824,
        longitude: 106.92272556134971,
        image_link:
          "https://ubn.mn/storage/huuhdiin%20park/MPA-PHOTO-2021-7-Z-3263.jpg",
      },
      {
        company_name: "Mongolian Construction",
        rating: 3.8,
        industry: "Construction",
        latitude: 47.9154,
        longitude: 106.9208,
        image_link: "https://example.com/images/mongolian_construction.jpg",
      },
      {
        company_name: "Zanabazar LLC",
        rating: 4.0,
        industry: "Retail",
        latitude: 47.9198,
        longitude: 106.9184,
        image_link: "https://example.com/images/zanabazar_llc.jpg",
      },
      {
        company_name: "KhasBank",
        rating: 4.6,
        industry: "Banking",
        latitude: 47.9105,
        longitude: 106.9273,
        image_link: "https://example.com/images/khasbank.jpg",
      },
    ],
    Chingeltei: [
      {
        company_name: "Erdenet LLC",
        rating: 4.3,
        industry: "Mining",
        latitude: 47.9071,
        longitude: 106.918,
        image_link: "https://example.com/images/erdenet_llc.jpg",
      },
      {
        company_name: "Ulaanbaatar Foods",
        rating: 4.1,
        industry: "Food & Beverage",
        latitude: 47.911,
        longitude: 106.9201,
        image_link: "https://example.com/images/ulaanbaatar_foods.jpg",
      },
      {
        company_name: "Mobicom Corporation",
        rating: 4.7,
        industry: "Telecommunications",
        latitude: 47.915,
        longitude: 106.9246,
        image_link: "https://example.com/images/mobicom_corporation.jpg",
      },
      {
        company_name: "Uul Uurhai Invest",
        rating: 4.2,
        industry: "Investment",
        latitude: 47.9065,
        longitude: 106.9214,
        image_link: "https://example.com/images/uul_uurhai_invest.jpg",
      },
      {
        company_name: "Chingeltei Store",
        rating: 3.9,
        industry: "Retail",
        latitude: 47.908,
        longitude: 106.9225,
        image_link: "https://example.com/images/chingeltei_store.jpg",
      },
    ],
    KhanUul: [
      {
        company_name: "Mongolian Barbecue",
        rating: 4.4,
        industry: "Restaurant",
        latitude: 47.9073,
        longitude: 106.9218,
        image_link: "https://example.com/images/mongolian_barbecue.jpg",
      },
      {
        company_name: "Hobnob Restaurant",
        rating: 4.6,
        industry: "Restaurant",
        latitude: 47.9125,
        longitude: 106.9243,
        image_link: "https://example.com/images/hobnob_restaurant.jpg",
      },
      {
        company_name: "Mongolian Grill",
        rating: 4.3,
        industry: "Restaurant",
        latitude: 47.9086,
        longitude: 106.9206,
        image_link:
          "https://onestophalal.com/cdn/shop/articles/mongolian_grill_recipe_1200x.jpg?v=1712397372",
      },
      {
        company_name: "The Good Bean",
        rating: 4.1,
        industry: "Cafe",
        latitude: 47.89776709980071,
        longitude: 106.9068915535264,
        image_link: "https://example.com/images/the_good_bean.jpg",
      },
      {
        company_name: "Mongol Steakhouse",
        rating: 4.5,
        industry: "Restaurant",
        latitude: 47.9102,
        longitude: 106.9236,
        image_link:
          "https://uploads.naturkartan-cdn.se/e7a3de2cf16c785eeecc779e4203529d.jpg?width=960&height=640",
      },
    ],
    BayanZurkh: [
      {
        company_name: "The Pizza Company",
        rating: 4.0,
        industry: "Restaurant",
        latitude: 47.905,
        longitude: 106.9203,
        image_link: "https://example.com/images/the_pizza_company.jpg",
      },
      {
        company_name: "Shangri-La Hotel Mongolian Restaurant",
        rating: 4.8,
        industry: "Restaurant",
        latitude: 47.9075,
        longitude: 106.9237,
        image_link: "https://example.com/images/shangri_la_hotel.jpg",
      },
      {
        company_name: "Luna Restaurant",
        rating: 4.2,
        industry: "Restaurant",
        latitude: 47.9088,
        longitude: 106.9211,
        image_link: "https://example.com/images/luna_restaurant.jpg",
      },
      {
        company_name: "D’Luxe Coffee",
        rating: 4.4,
        industry: "Cafe",
        latitude: 47.9101,
        longitude: 106.9225,
        image_link: "https://example.com/images/d_luxe_coffee.jpg",
      },
      {
        company_name: "Haveli Indian Restaurant",
        rating: 4.7,
        industry: "Restaurant",
        latitude: 47.9115,
        longitude: 106.9232,
        image_link: "https://example.com/images/haveli_indian_restaurant.jpg",
      },
    ],
    BayanGol: [
      {
        company_name: "Gobi Restaurant",
        rating: 4.2,
        industry: "Restaurant",
        latitude: 47.9087,
        longitude: 106.9209,
        image_link: "https://example.com/images/gobi_restaurant.jpg",
      },
      {
        company_name: "Mikado",
        rating: 4.4,
        industry: "Restaurant",
        latitude: 47.9103,
        longitude: 106.9223,
        image_link: "https://example.com/images/mikado.jpg",
      },
      {
        company_name: "Wiener Cafe",
        rating: 4.1,
        industry: "Cafe",
        latitude: 47.9117,
        longitude: 106.9234,
        image_link: "https://example.com/images/wiener_cafe.jpg",
      },
      {
        company_name: "La Gusto",
        rating: 4.3,
        industry: "Restaurant",
        latitude: 47.9125,
        longitude: 106.924,
        image_link: "https://example.com/images/la_gusto.jpg",
      },
      {
        company_name: "Tandoori Indian Restaurant",
        rating: 4.5,
        industry: "Restaurant",
        latitude: 47.9133,
        longitude: 106.9246,
        image_link: "https://example.com/images/tandoori_indian_restaurant.jpg",
      },
    ],
    Nalaikh: [
      {
        company_name: "KFC",
        rating: 4.0,
        industry: "Fast Food",
        latitude: 47.8833,
        longitude: 106.9,
        image_link: "https://example.com/images/kfc_nalaikh.jpg",
      },
      {
        company_name: "Munkhjin LLC",
        rating: 3.9,
        industry: "Retail",
        latitude: 47.8811,
        longitude: 106.9,
        image_link: "https://example.com/images/kfc_nalaikh.jpg",
      },
    ],
  };

  const { district } = req.query;

  if (district) {
    if (data[district]) {
      res.status(200).json(data[district]);
    } else {
      res.status(404).json({ message: "District not found" });
    }
  } else {
    res.status(200).json(data);
  }
}
