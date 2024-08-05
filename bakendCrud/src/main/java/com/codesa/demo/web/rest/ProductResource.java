package com.codesa.demo.web.rest;

import com.codesa.demo.service.IProductService;
import com.codesa.demo.service.dto.ProductDTO;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ProductResource {

    @Autowired
    IProductService productRepository;

    @PostMapping("/product/create")
    public ProductDTO create(@RequestBody ProductDTO productDTO){
        return productRepository.create(productDTO);
    }


    @PutMapping("/product/{id}")
    public ProductDTO update(@PathVariable  Long id, @RequestBody ProductDTO dto){
        return productRepository.update(id, dto);
    }

    @GetMapping("/product/getAll")
    public List<ProductDTO> getAll(){
        return productRepository.getAll();
    }

    @GetMapping("/product/{id}")
    public Optional<ProductDTO> getById(@PathVariable Long id){
        return productRepository.getById(id);
    }



    @DeleteMapping("/product/{id}")
    public void deleteProduct(@PathVariable Long id){
        System.out.println("Deletion");
        productRepository.delete(id);
    }
}
