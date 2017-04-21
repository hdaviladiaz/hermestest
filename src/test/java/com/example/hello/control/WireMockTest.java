package com.example.hello.control;

import com.github.tomakehurst.wiremock.junit.WireMockClassRule;
import org.assertj.core.api.Assertions;
import org.junit.*;

import static com.github.tomakehurst.wiremock.client.WireMock.*;


public class WireMockTest {

    @ClassRule
    public static WireMockClassRule wireMockRule = new WireMockClassRule(8080);

    @Rule
    public WireMockClassRule instanceRule = wireMockRule;

    @Before
    public void setUp() throws Exception {
        wireMockRule.start();
    }

    @After
    public void tearDown() throws Exception {
        wireMockRule.shutdown();
    }

    @Test
    public void shouldReceiveSomething() throws Exception {
        //WireMocks verifica que se haga el request a al endpoint especificado, con los  headers que se deseen comparar, etc.
        String expected = "Hello Armando!";
        stubFor(get(urlPathMatching("/greeting"))
                .withQueryParam("name", equalTo("Armando"))
                .withHeader("Content-Type", matching("text/plain")));

        DemoService demoService = new DemoService();
        //Notar que DemoService.greet tiene que hacer un request a /greeting
        String message = demoService.greet("Armando");

        verify(getRequestedFor(urlMatching("/greeting"))
                .withQueryParam("name", equalTo("Armando"))
                .withHeader("Content-Type", matching("text/plain")));
    }

    @Test
    public void shouldReceiveStubedResponse() throws Exception {
        String expected = "Hello Armando!";

        //También se pueden hacer stubs de response, ejemplo:
        stubFor(get(urlEqualTo("greeting"))
                .withQueryParam("name", equalTo("Armando"))
                .willReturn(aResponse()
                        .withHeader("Content-Type", "text/plain")
                        .withBody(expected)));

        DemoService demoService = new DemoService();
        //Notar que DemoService.greet tiene que hacer un request a /greeting
        String message2 = demoService.greet("Armando");

        Assertions.assertThat(message2).isEqualTo(expected);
        //En este caso también se debe hacer un request, porque
        // WireMock verificará que se haga el request y devolverá el stub si se hace el request al endpoint especificado
        //Luego se pueden hacer asserts al SUT sin problemas
    }
}