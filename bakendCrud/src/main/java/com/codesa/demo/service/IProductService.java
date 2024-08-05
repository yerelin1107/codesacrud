package com.codesa.demo.service;

import com.codesa.demo.service.dto.ProductDTO;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface IProductService {

    public ProductDTO create(ProductDTO productDTO);

    public Page<ProductDTO> read(Integer pageSize, Integer pageNUmber);

    public ProductDTO update(Long id, ProductDTO dto);

    public Optional<ProductDTO> getById(Long id);

    public void delete(Long id);

    public List<ProductDTO> getAll();
}
