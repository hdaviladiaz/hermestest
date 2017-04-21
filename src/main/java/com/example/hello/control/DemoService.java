package com.example.hello.control;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class DemoService {

    public String greet(String name) throws IOException {
        String url = "http://localhost:8080/greeting" + "?name=" + name;
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("GET");
        con.setRequestProperty("Content-Type", "text/plain");

        InputStream is;
        if (200 <= con.getResponseCode() && con.getResponseCode() <= 299) {
            is = con.getInputStream();
        } else {
            is = con.getErrorStream();
        }

        final byte[] buffer = new byte[is.available()];
        int _byte;
        while ((_byte = is.read(buffer)) != -1){}
        return new String(buffer);
    }
}
