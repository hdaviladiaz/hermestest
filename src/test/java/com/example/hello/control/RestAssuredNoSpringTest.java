package com.example.hello.control;

import org.junit.Test;

import static io.restassured.RestAssured.get;
import static org.hamcrest.Matchers.equalTo;

public class RestAssuredNoSpringTest {
    @Test
    public void shouldGetLottoData() throws Exception {

        get("/greeting?name=Armando")
                .then()
                .body("content", equalTo("Hello, Armando!"));
    }
}
