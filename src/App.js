import './App.css';
import {BrowserRouter,Route,Routes}from 'react-router-dom';
import Home from './components/Home';
import Empdetails from './components/Empdetails';
import Empbirthday from './components/Empbirthday';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/empdetails' Component={Empdetails}></Route>
      <Route path='/empbirthday'Component={Empbirthday}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;







// const individuals = [
//   {
//     id: 1,
//     name: "John Doe",
//     gender: "Male",
//     birthday: "1990-07-15",
//     age: 32,
//     profileImage:
//       "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14046.jpg?w=2000",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     gender: "Female",
//     birthday: "1992-07-22",
//     age: 29,
//     profileImage:
//       "https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14042.jpg?w=2000",
//   },
//   {
//     id: 3,
//     name: "Michael Johnson",
//     gender: "Male",
//     birthday: "1987-07-12",
//     age: 34,
//     profileImage:
//       "https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=2000",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     gender: "Female",
//     birthday: "1995-07-18",
//     age: 27,
//     profileImage:
//       "https://banner2.cleanpng.com/20180326/wzw/kisspng-computer-icons-user-profile-avatar-female-profile-5ab915f791e2c1.8067312315220792235976.jpg",
//   },
//   {
//     id: 5,
//     name: "David Brown",
//     gender: "Male",
//     birthday: "1985-07-28",
//     age: 37,
//     profileImage:
//       "https://previews.123rf.com/images/gmast3r/gmast3r1710/gmast3r171002482/88771578-avatar-profile-icon-male-faceless-user-on-colorful-round-background-flat-vector-illustration.jpg",
//   },
//   {
//     id: 6,
//     name: "Sophia Wilson",
//     gender: "Female",
//     birthday: "1991-08-05",
//     age: 30,
//     profileImage:
//       "https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg?w=2000",
//   },
//   {
//     id: 7,
//     name: "Matthew Taylor",
//     gender: "Male",
//     birthday: "1988-07-14",
//     age: 34,
//     profileImage:
//       "https://previews.123rf.com/images/gmast3r/gmast3r1710/gmast3r171002487/88771604-avatar-profile-icon-male-faceless-user-on-colorful-round-background-flat-vector-illustration.jpg",
//   },
//   {
//     id: 8,
//     name: "Olivia Johnson",
//     gender: "Female",
//     birthday: "1993-11-07",
//     age: 28,
//     profileImage:
//       "https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14048.jpg?w=2000",
//   },
//   {
//     id: 9,
//     name: "William Miller",
//     gender: "Male",
//     birthday: "1990-07-22",
//     age: 32,
//     profileImage:
//       "https://thumbs.dreamstime.com/b/male-avatar-profile-icon-round-man-face-flat-vector-illustration-102767955.jpg",
//   },
//   {
//     id: 10,
//     name: "Ava Martinez",
//     gender: "Female",
//     birthday: "1994-07-25",
//     age: 28,
//     profileImage:
//       "https://thumbs.dreamstime.com/b/young-executive-woman-profile-icon-beautiful-vector-illustration-design-81933191.jpg",
//   },
//   {
//     id: 11,
//     name: "James Anderson",
//     gender: "Male",
//     birthday: "1989-07-12",
//     age: 33,
//     profileImage:
//       "https://previews.123rf.com/images/gmast3r/gmast3r1710/gmast3r171002486/88771603-avatar-profile-icon-male-faceless-user-on-colorful-round-background-flat-vector-illustration.jpg",
//   },
//   {
//     id: 12,
//     name: "Isabella Wilson",
//     gender: "Female",
//     birthday: "1996-07-19",
//     age: 26,
//     profileImage:
//       "https://www.shutterstock.com/image-vector/girl-icon-flat-on-blu-260nw-1592112331.jpg",
//   },
//   {
//     id: 13,
//     name: "Joseph Lee",
//     gender: "Male",
//     birthday: "1987-08-07",
//     age: 34,
//     profileImage: "https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg",
//   },
//   {
//     id: 14,
//     name: "Mia Taylor",
//     gender: "Female",
//     birthday: "1992-05-03",
//     age: 29,
//     profileImage:
//       "https://cdn-icons-png.flaticon.com/512/201/201634.png",
//   },
//   {
//     id: 15,
//     name: "Daniel Davis",
//     gender: "Male",
//     birthday: "1986-07-20",
//     age: 36,
//     profileImage:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlvapOOKTYbJNRayZFsm-7FFJG5_MOVnrfWQ&usqp=CAU",
//   },
//   {
//     id: 16,
//     name: "Emma Thomas",
//     gender: "Female",
//     birthday: "1989-03-08",
//     age: 33,
//     profileImage:
//       "https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_1280.png",
//   },
//   {
//     id: 17,
//     name: "Andrew Hernandez",
//     gender: "Male",
//     birthday: "1993-01-04",
//     age: 30,
//     profileImage:
//       "https://cdn-icons-png.flaticon.com/512/219/219983.png",
//   },
//   {
//     id: 18,
//     name: "Sofia Anderson",
//     gender: "Female",
//     birthday: "1991-07-11",
//     age: 32,
//     profileImage:
//       "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
//   },
//   {
//     id: 19,
//     name: "Christopher Brown",
//     gender: "Male",
//     birthday: "1988-07-11",
//     age: 35,
//     profileImage:
//       "https://cdn-icons-png.flaticon.com/512/219/219988.png"
//   },
//   {
//                 id: 20,
//                 name: "Chloe Rodriguez",
//                 gender: "Female",
//                 birthday: "1994-07-16",
//                 age: 28,
//                 profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTiuB0TEIvT4-tfSczpgVraj7n44bQdaxgDhRckf6TBGSl7XdU8DdsrcpU-LekERdrjg&usqp=CAU"
//               },
//               {
//                 id: 21,
//                 name: "Benjamin Martinez",
//                 gender: "Male",
//                 birthday: "1990-02-03",
//                 age: 32,
//                 profileImage: "https://cdn-icons-png.flaticon.com/512/219/219964.png"
//               },
//               {
//                 id: 22,
//                 name: "Grace Wilson",
//                 gender: "Female",
//                 birthday: "1993-07-18",
//                 age: 28,
//                 profileImage: "https://as1.ftcdn.net/v2/jpg/01/16/24/44/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg"
//               },
//               {
//                 id: 23,
//                 name: "Samuel Lewis",
//                 gender: "Male",
//                 birthday: "1987-05-28",
//                 age: 34,
//                 profileImage: "https://cdn-icons-png.flaticon.com/128/236/236831.png"
//               }
//             ]