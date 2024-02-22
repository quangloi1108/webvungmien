import banhpiaImage from '../assets/img/datas/banhpia.jpg';
import banhphongsuaImage from '../assets/img/datas/banhphongsua.jpg';
import keoduaImage from '../assets/img/datas/keodua.jpg';
import hatsenImage from '../assets/img/datas/hatsen.jpg';
import boImage from '../assets/img/datas/bo.jpg';
import matongImage from '../assets/img/datas/matong.jpg';
import banhtrangImage from '../assets/img/datas/banhtrang.jpg';

const products = [
  {
    id: 1,
    name: 'Bánh Pía',
    description: 'Đặc sản Sóc Trăng',
    price: 80000,
    image: banhpiaImage, // Sử dụng biến được import từ đường dẫn hình ảnh
  },
  {
    id: 2,
    name: 'Bánh phòng sữa',
    description: 'Đặc sản Bến Tre',
    price: 150000,
    image: banhphongsuaImage, // Sử dụng biến được import từ đường dẫn hình ảnh
  },
  {
    id: 3,
    name: 'Kẹo dừa',
    description: 'Đặc sản Bến Tre',
    price: 200000,
    image: keoduaImage, // Sử dụng biến được import từ đường dẫn hình ảnh
  },
  {
    id: 4,
    name: 'Hạt Sen',
    description: 'Đặc sản Huế',
    price: 200000,
    image: hatsenImage, // Sử dụng biến được import từ đường dẫn hình ảnh
  },
  {
    id: 5,
    name: 'Bơ',
    description: 'Đặc sản Đăk Lăk',
    price: 200000,
    image: boImage, // Sử dụng biến được import từ đường dẫn hình ảnh
  },
  {
    id: 6,
    name: 'Mật ong',
    description: 'Đặc sản Tây Nguyên',
    price: 200000,
    image: matongImage, // Sử dụng biến được import từ đường dẫn hình ảnh
  },
  {
    id: 7,
    name: 'Bánh tráng Dừa',
    description: 'Đặc sản Bến Tre',
    price: 200000,
    image: banhtrangImage, // Sử dụng biến được import từ đường dẫn hình ảnh
  },
  
];

export default products;
