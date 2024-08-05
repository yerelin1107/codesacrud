package com.codesa.demo.service.transformer;

import com.codesa.demo.domain.Product;
import com.codesa.demo.service.dto.ProductDTO;

public class ProductTransformer {


    public static ProductDTO getProductDTOFromProduct(Product product){
        if (product == null){
            return null;
        }

        ProductDTO dto = new ProductDTO();

        //set variables
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setPrice(product.getPrice());

        return dto;
    }

    public static Product getProductFromProductDTO (ProductDTO dto){
        if (dto == null){
            return null;
        }

        Product product = new Product();

        product.setId(dto.getId());
        product.setName(dto.getName());
        product.setPrice(dto.getPrice());


        return product;
    }



}










