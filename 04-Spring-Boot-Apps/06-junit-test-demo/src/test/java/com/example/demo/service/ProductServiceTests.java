package com.example.demo.service;

import com.example.demo.model.Product;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.junit.jupiter.api.Test;

import java.util.List;

public class ProductServiceTests {
    ProductService productService;

    @Test
    public void getAllProducts_success(){
        productService = new ProductService();
        List<Product> products = productService.getAllProducts();
        Assertions.assertEquals(2, products.size());
    }

    @Test
    public void createProduct_success(){
        productService = new ProductService();
        productService.createProduct(new Product(3,"iPhone 14", "Smartphone", 23434));
        List<Product> products = productService.getAllProducts();
        Assertions.assertEquals(3, products.size());
    }

    @Test
    public void deleteProduct_success(){
        productService = new ProductService();
        Assertions.assertTrue(productService.deleteProduct(1));
    }

    @Test
    public void deleteProduct_failure(){
        productService = new ProductService();
        Assertions.assertFalse(productService.deleteProduct(10));
    }
}
