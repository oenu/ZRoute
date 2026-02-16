package dev.zroute.server.controller;

import dev.zroute.server.api.ExampleApi;
import dev.zroute.server.model.ExampleObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

/** Example endpoint controller implementation. */
@RestController
public class ExampleController implements ExampleApi {

  @Override
  public ResponseEntity<ExampleObject> getExample() {
    ExampleObject obj =  ExampleObject.builder().name("test").id(1).build();

    return ResponseEntity.ok(obj);
  }
}
