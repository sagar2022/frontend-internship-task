import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataFetch } from "../action";
import { useEffect } from "react";

const Service = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.servicesReducer.data);
  const regex = /(<([^>]+)>)/gi;

  useEffect(() => {
    dispatch(getDataFetch());
  }, [dispatch]);

  return (
    <>
      <section className="section" id="service">
        <div className="section-title">
          <h2>Our Services</h2>
          <div className="underline"></div>
        </div>
        <div className="service-center section-center">
          {data.map((data, index) => (
            <article className="service">
              <img src={data.photo} className="service-icon" alt="logo" />
              <h3>{data.title}</h3>
              <div className="description">
                <p>{data.description1.replace(regex, "")}</p>
                <p>{data.description2.replace(regex, "")}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;
