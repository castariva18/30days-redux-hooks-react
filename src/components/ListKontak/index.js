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
    <div>
      <h3>ListKontak</h3>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {" "}
              {kontak.nama} - {kontak.nohp}
              <button
                onClick={() => dispatch(deleteKontak(kontak.id))}
                style={{ margin: "10px" }}
              >
                Hapus
              </button>
              <button onClick={() => dispatch(detailKontak(kontak))}>
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
