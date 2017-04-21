package controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.concurrent.atomic.AtomicLong;


@RestController
public class HermesController {
    @RequestMapping(path = "/greeting", method = RequestMethod.GET)
    public String greeting() {
        return "hello world";
    }
}
