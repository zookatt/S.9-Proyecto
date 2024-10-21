import { useState, useEffect } from "react";
import styled from "styled-components";
import customersData from "../../customers.json";
import google from "../../assets/images/google.png";

const ReviewsContainer = styled.div`
  margin: 1.25rem 0;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Carousel = styled.div`
  height: 24rem;
  border: 2px solid #d1d5db;
  border-radius: 0.5rem;
`;

const CarouselItem = styled.div`
  height: 90%;
  padding: 1rem 0;
`;

const CustomerReview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const CustomerImage = styled.img`
  margin-top: 2rem;
  margin-bottom: 0.25rem;
`;

const CustomerName = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 1.125rem;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const ReviewText = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
  padding: 1.25rem;
  color: black;

  @media (min-width: 640px) {
    width: 66.666667%;
    font-size: 1.25rem;
  }
`;

const Rating = styled.div`
  margin-bottom: 0.25rem;
`;

const StarInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFA500' viewBox='0 0 24 24'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;
`;

const GoogleLogo = styled.img`
  width: 150px;
`;

export const Reviews = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(customersData);
  }, []);

  return (
    <ReviewsContainer>
      <a href="https://maps.app.goo.gl/k5exNhxVRJanLmMN7">
        <Title>See what our clients think about us:</Title>
      </a>
      <Carousel className="carousel carousel-vertical rounded-box">
        {customers.map((customer, index) => (
          <CarouselItem
            key={index}
            className="carousel-item h-full justify-center"
          >
            <CustomerReview>
              <CustomerImage src={customer.img} alt={customer.customer} />
              <CustomerName>{customer.customer}</CustomerName>
              <ReviewText>{`"${customer.review}"`}</ReviewText>
              <Rating>
                {[...Array(5)].map((_, i) => (
                  <StarInput
                    key={i}
                    type="radio"
                    name={`rating-${index}`}
                    className="mask mask-star-2 bg-orange-400"
                    disabled
                    checked
                  />
                ))}
              </Rating>
              <a href="https://maps.app.goo.gl/k5exNhxVRJanLmMN7">
                <GoogleLogo src={google} alt="Google" draggable="false" />
              </a>
            </CustomerReview>
          </CarouselItem>
        ))}
      </Carousel>
    </ReviewsContainer>
  );
};

export default Reviews;
