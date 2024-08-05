package com.codesa.demo.service.dto;

import lombok.Getter;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
public class ProductDTO implements Serializable  {

    private  Long id;

    private String name;

    private Double price;




}





