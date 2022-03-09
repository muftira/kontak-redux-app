import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addKontak,
  getListKontak,
  updateKontak,
} from "../../actions/kontakaction";

function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");

  const dispatch = useDispatch();
  const { addKontakResult, detailKontakResult, updateKontakResult } =
    useSelector((state) => state.KontakReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateKontak({ id: id, nama: nama, nohp: nohp }));
    } else {
      dispatch(addKontak({ nama: nama, nohp: nohp }));
    }
    setNama("");
    setNohp("");
  };
  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
    }
    setNama("");
    setNohp("");
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    if (updateKontakResult) {
      dispatch(getListKontak());
    }
    setNama("");
    setNohp("");
    setId("");
  }, [updateKontakResult, dispatch]);

  useEffect(() => {
    if (detailKontakResult) {
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult]);

  return (
    <div className="flex flex-col justify-center items-center h-48 w-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl drop-shadow-white shadow-slate-700">
      <h4 className="mb-2 font-bold">{id ? "Edit Kontak" : "Add Kontak"}</h4>
      <form onSubmit={(e) => handleSubmit(e)}
        className='flex flex-col justify-center'
        >
        <input
          type="text"
          placeholder="Name . . ."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className=' bg-neutral-700 rounded-md px-1 py-1 text-sm w-60 h-8 text-white'
        />
        <input
          type="number"
          placeholder="Phone Number . . ."
          value={nohp}
          onChange={(e) => setNohp(e.target.value)}
          className='bg-neutral-700 rounded-md px-1 py-1 mt-2 text-sm w-60 h-8 text-white'
        />
        <div className="flex justify-center mt-4">
            <button className="h-8 w-20 rounded-md shadow-lg border-2 border-neutral-700">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddKontak;
