import React from "react";
import style from "./EditPage.Module.css";

class EditPage extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.fieldLabel}>Nama Mempelai Pria</div>
          <div>
            <input type="text" />
          </div>
        </div>

        <div className={style.row}>
          <div className={style.fieldLabel}>Nama Mempelai Wanita</div>
          <div>
            <input type="text" />
          </div>
        </div>

        <div className={style.row}>
          <div className={style.fieldLabel}>Nama Keluarga Pria</div>
          <div>
            <input type="text" />
          </div>
        </div>

        <div className={style.row}>
          <div className={style.fieldLabel}>Nama Keluarga Wanita</div>
          <div>
            <input type="text" />
          </div>
        </div>

        <div className={style.row}>
          <div className={style.fieldLabel}>Kronologi Pertemuan</div>
          <div>
            <textarea type="text" />
          </div>
        </div>

        <div className={style.row}>
          <div className={style.fieldLabel}></div>
          <div>
            <button>"Simpan"</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditPage;
