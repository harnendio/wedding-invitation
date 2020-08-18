import React from "react";
import "./HomePage.module.css";
import MainImage from "./images/nikah.jpg"; 

const MOCK = {
    informasiMempelai: {
      pria: {
        nama: "Soleh",
        keluarga: "Solehun",
      },
      wanita: {
        nama: "Ajeng",
        keluarga: "Puri",
      },
    },
  };

class HomePage extends React.Component {
   /* constructor(props) {
      super(props);
      this.state = {
        mock: MOCK
      }
    }
  
    componentDidMount() {
      axios.get("http://a79799842e12.ngrok.io/edit/info").then((result) => {
        console.log(result);
        this.setState({
          response: result.data.messages,
        });
      });
    }
    */

    render() {
        return (
            <div>
                <div className={style.menu}>
                    <div>Link Undangan</div>
                    <div>Link Ucapan</div>
                </div>
                <div>
                    <img src={MainImage} />;
                    <div className={style.Undangan}>
                        <div>
                            {MOCK.informasiMempelai.pria.nama} akan menikah dengan {""}
                            {MOCK.informasiMempelai.wanita.nama}
                        </div>
                    </div>
                    <div>Section Ucapan</div>
                </div>
                <div>Footer</div>
            </div>


            
        );
    }

export default HomePage;

