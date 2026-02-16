package dev.zroute.server.controller;

import dev.zroute.server.api.HealthApi;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

/** Health check endpoint controller implementation. */
@RestController
public class HealthController implements HealthApi {

  @Override
  public ResponseEntity<Void> getHealth() {
    return ResponseEntity.ok().build();
  }
}
