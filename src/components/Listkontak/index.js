import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak, deleteKontak, detailKontak } from "../../actions/kontakaction";

function ListKontak() {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakError,
    deleteKontakResult,
  } = useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //panggil action getlistkontak
    dispatch(getListKontak());
  }, [dispatch]);

  useEffect(() => {
    if (deleteKontakResult) {
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);

  return (
    <div className="">
      <h4 className="font-bold h-8 w-80 bg-[#2016F5] flex flex-col justify-center items-center rounded-md mt-4 shadow-xl">List Kontak</h4>
      

        {getListKontakResult ? (
          getListKontakResult.map((kontak) => {
            return (
              <p key={kontak.id}
              className='h-8 w-80 bg-white rounded-md shadow-xl my-2 flex justify-center items-center'
              >
                {kontak.nama} - {kontak.nohp} -{" "}
                <button onClick={() => dispatch(deleteKontak(kontak.id))}
                className='mx-2 text-red-700 font-bold'
                >
                  Hapus
                </button>{' '}
                <button onClick={() => dispatch(detailKontak(kontak))}
                className='text-red-700 font-bold'
                >Edit</button>
              </p>
            );
          })
        ) : getListKontakLoading ? (
          <p>Loading . . .</p>
        ) : (
          <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
        )}
      
    </div>
  );
}

export default ListKontak;
