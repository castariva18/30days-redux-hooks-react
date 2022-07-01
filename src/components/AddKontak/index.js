import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addKontak,
  getListKontak,
  updateKontak,
} from "../../actions/kontakAction";
import Swal from "sweetalert2";

function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");

  const { addKontakResult, detailKontakResult, updateKontakResult } =
    useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    if (id) {
      dispatch(updateKontak({ nama: nama, nohp: nohp, id: id }));
    } else {
      if (nama === "" && nohp === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Field Kosong",
        });
      } else {
        dispatch(addKontak({ nama: nama, nohp: nohp }));
      }
    }
  };

  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
    }
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    if (detailKontakResult) {
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult, dispatch]);

  useEffect(() => {
    if (updateKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
      setId("");
    }
  }, [updateKontakResult, dispatch]);

  return (
    <div>
      {id ? "Edit Kontak" : "Add Kontak"}
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder="Inputkan Nama Lengkap"
          name="nama"
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <input
          type="number"
          placeholder="Inputkan Nomor Hp"
          name="nohp"
          value={nohp}
          onChange={(event) => setNohp(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddKontak;
