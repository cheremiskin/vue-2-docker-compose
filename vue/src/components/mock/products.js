export const productsModel = {
  getList: () =>  [
    {
      id: '1',
      badge: 'sale',
      rating: 4.6,
      reviews: 4,
      title: 'tbeyound excellence',
      caption: 'the quality is beyound excellence',
      img: '/engine.png',
      price: '$650.00',
      discountPrice: '$250.00',
    },
    {
      id: '2',
      badge: 'sale',
      rating: 2.6,
      reviews: 4,
      title: 'tbeyound excellence',
      caption: 'the quality is beyound excellence',
      img: '/engine.png',
      price: '650$'
    },
    {
      id: '3',
      badge: 'sale',
      rating: 3.6,
      reviews: 4,
      title: 'tbeyound excellence',
      caption: 'the quality is beyound excellence',
      img: '/engine.png',
      price: '650$'
    },
    {
      id: '4',
      badge: 'sale',
      rating: 0.6,
      reviews: 4,
      title: 'tbeyound excellence',
      caption: 'the quality is beyound excellence',
      img: '/engine.png',
      price: '650$'
    },
    {
      id: '5',
      badge: 'top',
      rating: 4.6,
      reviews: 4,
      title: 'tbeyound excellence',
      caption: 'the quality is beyound excellence',
      img: '/engine.png',
      price: '$650.00',
      discountPrice: '$250.00',
    },
    {
      id: '6',
      badge: 'top',
      rating: 2.6,
      reviews: 4,
      title: 'tbeyound excellence',
      caption: 'the quality is beyound excellence',
      img: '/engine.png',
      price: '650$'
    },
    {
      id: '7',
      badge: 'top',
      rating: 3.6,
      reviews: 4,
      title: 'tbeyound excellence',
      caption: 'the quality is beyound excellence',
      img: '/engine.png',
      price: '650$'
    },
    {
      id: '8',
      badge: 'top',
      rating: 0.6,
      reviews: 4,
      title: 'tbeyound excellence',
      caption: 'the quality is beyound excellence',
      img: '/engine.png',
      price: '650$'
    }
  ],
  getTop: () => productsModel.getList().filter(el => el.badge === 'top'),
  getSales: () => productsModel.getList().filter(el => el.badge === 'sale'),
  getOne: (id) => productsModel.getList().find(el => el.id === id)
}
