plugins {
    java
    id("org.springframework.boot") version "4.0.2"
    id("net.ltgt.errorprone") version "5.0.0"
    id("com.diffplug.spotless") version "8.2.1"
    checkstyle
    id("org.openapi.generator") version "7.20.0"
}

group = "dev.zroute"
version = "0.1.0-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(25)
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(platform(org.springframework.boot.gradle.plugin.SpringBootPlugin.BOM_COORDINATES))
    implementation("org.springframework.boot:spring-boot-starter-web")

    errorprone("com.google.errorprone:error_prone_core:2.47.0")

    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

checkstyle {
    toolVersion = "10.21.4"
    configFile = file("config/checkstyle/checkstyle.xml")
}

spotless {
    java {
        googleJavaFormat()
        removeUnusedImports()
    }
}

openApiGenerate {
    generatorName.set("spring")
    inputSpec.set("${rootProject.projectDir}/../api/bundled/openapi.yaml")
    outputDir.set("${layout.buildDirectory.get()}/generated/openapi")
    apiPackage.set("dev.zroute.server.api")
    modelPackage.set("dev.zroute.server.model")
    configOptions.set(mapOf(
        "interfaceOnly" to "true",
        "useSpringBoot3" to "true",
        "documentationProvider" to "none"
    ))
}

sourceSets {
    main {
        java {
            srcDir("${layout.buildDirectory.get()}/generated/openapi/src/main/java")
        }
    }
}
