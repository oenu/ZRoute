plugins {
    java
    id("org.springframework.boot") version "4.0.2"
    id("net.ltgt.errorprone") version "5.0.0"
    id("com.diffplug.spotless") version "8.2.1"
    // checkstyle - temporarily disabled
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
    implementation("org.springframework.boot:spring-boot-starter-validation")
    implementation("org.openapitools:jackson-databind-nullable:0.2.6")
    implementation("com.fasterxml.jackson.core:jackson-databind")

    errorprone("com.google.errorprone:error_prone_core:2.47.0")

    testImplementation("org.springframework.boot:spring-boot-starter-test")
}

// Temporarily disabled - checkstyle configuration needs review
// checkstyle {
//     toolVersion = "10.21.4"
//     configFile = file("config/checkstyle/checkstyle.xml")
// }
// 
// tasks.named<Checkstyle>("checkstyleMain") {
//     source = fileTree("src/main/java")
// }

spotless {
    java {
        googleJavaFormat()
        removeUnusedImports()
        target("src/**/*.java")
        targetExclude("**/generated/**")
    }
}

openApiGenerate {
    generatorName.set("spring")
    inputSpec.set("${rootProject.projectDir}/../api/bundled/openapi.yaml")
    outputDir.set("${rootProject.projectDir}/src/main/generated/openapi")
    apiPackage.set("dev.zroute.server.api")
    modelPackage.set("dev.zroute.server.model")
    configOptions.set(mapOf(
        "useSpringBoot3" to "true",
        "openApiNullable" to "true",
        "documentationProvider" to "none",
        "interfaceOnly" to "true",
        "generateBuilders" to "true"
    ))
}

sourceSets {
    main {
        java {
            srcDir("${rootProject.projectDir}/src/main/generated/openapi/src/main/java")
        }
    }
}
