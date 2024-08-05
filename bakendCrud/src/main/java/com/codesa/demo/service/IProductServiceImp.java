package com.codesa.demo.service;

import com.codesa.demo.Repository.ProductRepository;
import com.codesa.demo.domain.Product;
import com.codesa.demo.service.dto.ProductDTO;
import com.codesa.demo.service.transformer.ProductTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class IProductServiceImp implements IProductService{


    ProductRepository productRepository;

    @Autowired
    public IProductServiceImp(ProductRepository productRepository){
        this.productRepository = productRepository;
    }

    @Override
    public ProductDTO create(ProductDTO productDTO) {
        System.out.println("Enter to delete");
        Product product = ProductTransformer.getProductFromProductDTO(productDTO);
        productRepository.save(product);
        ProductDTO response = ProductTransformer.getProductDTOFromProduct(product);
        return response;
    }

    @Override
    public Page<ProductDTO> read(Integer pageSize, Integer pageNUmber) {
        return null;
    }

    @Override
    public ProductDTO update(Long id, ProductDTO dto) {
            Product product = ProductTransformer.getProductFromProductDTO(dto);
            productRepository.save(product);
            return dto;

    }

    @Override
    public Optional<ProductDTO> getById(Long id) {
        return productRepository.findById(id)
                .map(ProductTransformer::getProductDTOFromProduct);
    }

    @Override
    public void delete(Long id) {
        Optional<ProductDTO> productToDelete = getById(id);
        if(productToDelete.isPresent()){
            ProductDTO toDelete = productToDelete.get();
            Product product = ProductTransformer.getProductFromProductDTO(toDelete);
            productRepository.delete(product);
        }else{
            System.out.print("No se ha podido borrar ");
        }

    }

    @Override
    public List<ProductDTO> getAll() {
        List<Product> products = productRepository.findAll();
        return products.stream()
                .map(ProductTransformer::getProductDTOFromProduct)
                .collect(Collectors.toList());
    }
}
