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
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");

  const { addKontakResult, detailKontakResult, updateKontakResult } =
    useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    if (id) {
      dispatch(
        updateKontak({ nama: nama, nohp: nohp, address: address, id: id })
      );
    } else {
      if (nama === "" && nohp === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Field Kosong",
        });
      } else {
        dispatch(addKontak({ nama: nama, nohp: nohp, address: address }));
      }
    }
  };

  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
      setAddress("");
    }
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    if (detailKontakResult) {
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setAddress(detailKontakResult.address);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult, dispatch]);

  useEffect(() => {
    if (updateKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
      setAddress("");
      setId("");
    }
  }, [updateKontakResult, dispatch]);

  return (
    <div className="flex-col border rounded-lg m-4">
      <div className="text-center my-2">
        <h2 className="text-xl">{id ? "Edit Kontak" : "Add Kontak"}</h2>
      </div>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="p-4 flex-col justify-items-center"
      >
        <div>
          <input
            type="text"
            placeholder="Inputkan Nama Lengkap"
            name="nama"
            value={nama}
            className="w-full border rounded-lg m-2 p-2"
            onChange={(event) => setNama(event.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Inputkan Nomor Hp"
            name="nohp"
            value={nohp}
            className="w-full border rounded-lg m-2 p-2"
            onChange={(event) => setNohp(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Inputkan Alamat"
            name="address"
            value={address}
            className="w-full border rounded-lg m-2 p-2"
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 rounded-lg m-2 p-2 text-white w-full hover:bg-blue-700 hover:scale-95 duration-200"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddKontak;
