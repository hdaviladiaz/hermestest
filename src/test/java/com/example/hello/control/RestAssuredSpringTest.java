package com.example.hello.control;

import com.example.hello.boundary.GreetingController;
import org.junit.Test;

import static io.restassured.module.mockmvc.RestAssuredMockMvc.given;
//import static io.restassured.module.mockmvc.matcher.RestAssuredMockMvcMatchers.*;
import static org.hamcrest.CoreMatchers.hasItems;
import static org.hamcrest.core.IsEqual.equalTo;

public class RestAssuredSpringTest {

    @Test
    public void shouldReturnHelloCommaArmandoExclamationMark() {

        given().standaloneSetup(new GreetingController())
                .param("name", "Armando")
                .when()
                .get("/greeting")
                .then()
                .statusCode(200)
                .body("id", equalTo(1))
                .body("content", equalTo("Hello, Armando!"));
    }
}
