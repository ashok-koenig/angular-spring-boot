package com.example.demo.service;

import com.example.demo.model.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private List<Product> products = new ArrayList<>();

    public ProductService(){
        products.add(new Product(1, "Dell Laptop", "Laptop", 78787));
        products.add(new Product(2, "iPhone 16", "Smartphone", 65655));
    }

    public List<Product> getAllProducts(){
        return products;
    }

    public Product createProduct(Product product){
        products.add(product);
        return product;
    }

    public Optional<Product> getAProduct(int id){
        return products.stream().filter(product -> product.getId() == id).findFirst();
    }

    public boolean updateProduct(int id, Product updatedProduct){
        for(Product product: products){
            if(product.getId() == id){
                product.setTitle(updatedProduct.getTitle());
                product.setCategory(updatedProduct.getCategory());
                product.setPrice(updatedProduct.getPrice());
                return true;
            }
        }
        return false;
    }

    public boolean deleteProduct(int id){
        return products.removeIf(product -> product.getId() == id);
    }
}
