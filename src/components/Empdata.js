import '../App.css';
export default function Empdata(props) {
    return props.datas.map((item) => (
      <div className="empdata" key={item.id}>
        <div className="profile">
            <img src={item.profileImage} alt={item.name} className="image"></img>
        </div>
        <div className="details">
          <div>Name : {item.name}</div>
          <div>Gender : {item.gender}</div>
          <div>Date : {item.birthday}</div>
        </div>
      </div>
    ));
  }
  