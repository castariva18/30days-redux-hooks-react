import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteKontak,
  detailKontak,
  getListKontak,
} from "../../actions/kontakAction";

function ListKontak() {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakError,
    deleteKontakResult,
  } = useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    //panggil action get list kontak
    console.log("1. Didmount");
    dispatch(getListKontak());
  }, [dispatch]);

  useEffect(() => {
    if (deleteKontakResult) {
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);

  return (
    <div className="border rounded-lg p-4 m-4">
      <h3 className="text-center text-xl">List Contact</h3>
      {getListKontakResult ? (
        getListKontakResult.map((kontak, i) => {
          return (
            <p key={kontak.id}>
              {" "}
              {i + 1}. {kontak.nama} - {kontak.nohp} - {kontak.address}
              <button
                className="bg-red-500 rounded-lg p-2"
                onClick={() => dispatch(deleteKontak(kontak.id))}
                style={{ margin: "10px" }}
              >
                Hapus
              </button>
              <button
                className=" bg-green-500 rounded-lg p-2"
                onClick={() => dispatch(detailKontak(kontak))}
              >
                Edit
              </button>
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "data kosong"}</p>
      )}
    </div>
  );
}

export default ListKontak;
