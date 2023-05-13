import React from "react";
import styled from "styled-components";

const FilterDiv = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px 15px;
  > .title {
    font-size: ${(props) => `${props.theme.fontSize.l}`};
  }
  > .content {
    display: flex;
    gap: 10px;
  }
  > .content > .subtitle {
    color: ${(props) => `${props.theme.colors.neutral08}`};
  }
`;

const FilterPrice = () => {
  return (
    <FilterDiv>
      <h1 className="title">Mostrar el Precio total</h1>
      <div className="content">
        <p className="subtitle">
          Incluidas todas las tarifas, pero sin contar los impuestos
        </p>
        <div>slider</div>
      </div>
    </FilterDiv>
  );
};

export default FilterPrice;
