import Blockly from "blockly";
import "blockly/python";

// Blockly Blocks
Blockly.Blocks['django_create_project'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Django Project");
    this.appendValueInput("project_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Project Name");
    this.setColour(160);
    this.setTooltip("Creates a new Django project.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_app'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Django App");
    this.appendValueInput("app_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("App Name");
    this.setColour(160);
    this.setTooltip("Creates a new Django application within the project.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_model'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Django Model");
    this.appendValueInput("model_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Model Name");
    this.setColour(160);
    this.setTooltip("Creates a new model in Django ORM.");
    this.setHelpUrl("");
  }
};


  // Blockly Python
  Blockly.Python['django_create_project'] = function(block) {
    var value_project_name = Blockly.Python.valueToCode(block, 'project_name', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for creating a Django project
    var code = 'django-admin startproject ' + value_project_name + '\n';
    return code;
  };
  
  Blockly.Python['django_create_app'] = function(block) {
    var value_app_name = Blockly.Python.valueToCode(block, 'app_name', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for creating a Django app
    var code = 'python manage.py startapp ' + value_app_name + '\n';
    return code;
  };
  
  Blockly.Python['django_create_model'] = function(block) {
    var value_model_name = Blockly.Python.valueToCode(block, 'model_name', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for creating a Django model
    var code = 'python manage.py startapp ' + value_model_name + '\n';
    return code;
  };
  
  // Add Python code for other Django modules here

 // Blockly Blocks
Blockly.Blocks['django_create_view'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Django View");
    this.appendValueInput("view_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("View Name");
    this.setColour(160);
    this.setTooltip("Creates a new view in Django.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_template'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Django Template");
    this.appendValueInput("template_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Template Name");
    this.setColour(160);
    this.setTooltip("Creates a new template file in Django.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_form'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Django Form");
    this.appendValueInput("form_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Form Name");
    this.setColour(160);
    this.setTooltip("Creates a new form in Django forms.");
    this.setHelpUrl("");
  }
};

  
  // Blockly Python
  Blockly.Python['django_create_view'] = function(block) {
    var value_view_name = Blockly.Python.valueToCode(block, 'view_name', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for creating a Django view
    var code = 'def ' + value_view_name + '(request):\n';
    code += Blockly.Python.INDENT + '# Your view code here\n';
    return code;
  };
  
  Blockly.Python['django_create_template'] = function(block) {
    var value_template_name = Blockly.Python.valueToCode(block, 'template_name', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for creating a Django template
    var code = '{% extends "base.html" %}\n\n';
    code += '{% block content %}\n';
    code += '  <!-- Your template content here -->\n';
    code += '{% endblock %}\n';
    return code;
  };
  
  Blockly.Python['django_create_form'] = function(block) {
    var value_form_name = Blockly.Python.valueToCode(block, 'form_name', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for creating a Django form
    var code = 'from django import forms\n\n';
    code += 'class ' + value_form_name + '(forms.Form):\n';
    code += Blockly.Python.INDENT + '# Your form fields here\n';
    return code;
  };

  // Blockly Blocks
Blockly.Blocks['django_create_serializer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Django Serializer");
    this.appendValueInput("serializer_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Serializer Name");
    this.setColour(160);
    this.setTooltip("Creates a new serializer class in Django REST Framework.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_migration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Django Migration");
    this.appendValueInput("migration_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Migration Name");
    this.setColour(160);
    this.setTooltip("Creates a new migration file in Django for database changes.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_runserver'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Run Django Server");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Starts the Django development server.");
    this.setHelpUrl("");
  }
};


  // Blockly Python
  Blockly.Python['django_create_serializer'] = function(block) {
    var value_serializer_name = Blockly.Python.valueToCode(block, 'serializer_name', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for creating a Django serializer
    var code = 'from rest_framework import serializers\n\n';
    code += 'class ' + value_serializer_name + '(serializers.Serializer):\n';
    code += Blockly.Python.INDENT + '# Your serializer fields here\n';
    return code;
  };
  
  Blockly.Python['django_create_migration'] = function(block) {
    var value_migration_name = Blockly.Python.valueToCode(block, 'migration_name', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for creating a Django migration
    var code = 'python manage.py makemigrations ' + value_migration_name + '\n';
    return code;
  };
  
  Blockly.Python['django_runserver'] = function(block) {
    // Generate Python code for running Django server
    var code = 'python manage.py runserver\n';
    return code;
  };

 // Blockly Blocks
Blockly.Blocks['django_makemigrations'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Make Migrations");
    this.appendValueInput("app_label")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("App Label");
    this.setColour(160);
    this.setTooltip("Creates new migration files for app models that have changed.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_migrate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Migrate");
    this.appendValueInput("app_label")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("App Label");
    this.setColour(160);
    this.setTooltip("Applies migrations to the database.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_createsuperuser'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create Superuser");
    this.appendValueInput("username")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Username");
    this.appendValueInput("email")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Email");
    this.setColour(160);
    this.setTooltip("Creates a superuser account for Django admin interface.");
    this.setHelpUrl("");
  }
};

  
  // Blockly Python
  Blockly.Python['django_makemigrations'] = function(block) {
    var value_app_label = Blockly.Python.valueToCode(block, 'app_label', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for Django make migrations
    var code = 'python manage.py makemigrations ' + value_app_label + '\n';
    return code;
  };
  
  Blockly.Python['django_migrate'] = function(block) {
    var value_app_label = Blockly.Python.valueToCode(block, 'app_label', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for Django migrate
    var code = 'python manage.py migrate ' + value_app_label + '\n';
    return code;
  };
  
  Blockly.Python['django_createsuperuser'] = function(block) {
    var value_username = Blockly.Python.valueToCode(block, 'username', Blockly.Python.ORDER_ATOMIC);
    var value_email = Blockly.Python.valueToCode(block, 'email', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for creating Django superuser
    var code = 'python manage.py createsuperuser --username=' + value_username + ' --email=' + value_email + '\n';
    return code;
  };

 // Blockly Blocks
Blockly.Blocks['django_manage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Manage");
    this.appendValueInput("command")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Command");
    this.setColour(160);
    this.setTooltip("Runs a Django management command.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_collectstatic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Collect Static");
    this.setColour(160);
    this.setTooltip("Collects static files from each of your applications into a single location.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_test'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Test");
    this.appendValueInput("app_label")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("App Label");
    this.setColour(160);
    this.setTooltip("Runs tests for all the test cases in the specified application.");
    this.setHelpUrl("");
  }
};


  
  // Blockly Python
  Blockly.Python['django_manage'] = function(block) {
    var value_command = Blockly.Python.valueToCode(block, 'command', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for Django manage
    var code = 'python manage.py ' + value_command + '\n';
    return code;
  };
  
  Blockly.Python['django_collectstatic'] = function(block) {
    // Generate Python code for Django collect static
    var code = 'python manage.py collectstatic\n';
    return code;
  };
  
  Blockly.Python['django_test'] = function(block) {
    var value_app_label = Blockly.Python.valueToCode(block, 'app_label', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for Django test
    var code = 'python manage.py test ' + value_app_label + '\n';
    return code;
  };

 // Blockly Blocks
Blockly.Blocks['django_shell'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Shell");
    this.setColour(160);
    this.setTooltip("Launches the Django interactive Python shell.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_dumpdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Dumpdata");
    this.appendValueInput("app_label")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("App Label");
    this.setColour(160);
    this.setTooltip("Outputs the contents of the database as a fixture of the given app.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_loaddata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Loaddata");
    this.appendValueInput("file_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("File Name");
    this.setColour(160);
    this.setTooltip("Installs the named fixture(s) in the database.");
    this.setHelpUrl("");
  }
};

  // Blockly Python
  Blockly.Python['django_shell'] = function(block) {
    // Generate Python code for Django shell
    var code = 'python manage.py shell\n';
    return code;
  };
  
  Blockly.Python['django_dumpdata'] = function(block) {
    var value_app_label = Blockly.Python.valueToCode(block, 'app_label', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for Django dumpdata
    var code = 'python manage.py dumpdata ' + value_app_label + '\n';
    return code;
  };
  
  Blockly.Python['django_loaddata'] = function(block) {
    var value_file_name = Blockly.Python.valueToCode(block, 'file_name', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for Django loaddata
    var code = 'python manage.py loaddata ' + value_file_name + '\n';
    return code;
  };

  // Blockly.Blocks
Blockly.Blocks['django_create_admin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create Admin");
    this.setColour(160);
    this.setTooltip("Creates a superuser with administrative privileges.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_user'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create User");
    this.appendValueInput("username")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Username");
    this.appendValueInput("password")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Password");
    this.setColour(160);
    this.setTooltip("Creates a new user with the provided username and password.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_group'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create Group");
    this.appendValueInput("group_name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Group Name");
    this.setColour(160);
    this.setTooltip("Creates a new group with the provided name.");
    this.setHelpUrl("");
  }
};

  // Blockly Python
  Blockly.Python['django_create_admin'] = function(block) {
    // Generate Python code for Django create admin
    var code = 'python manage.py createsuperuser\n';
    return code;
  };
  
  Blockly.Python['django_create_user'] = function(block) {
    var value_username = Blockly.Python.valueToCode(block, 'username', Blockly.Python.ORDER_ATOMIC);
    var value_password = Blockly.Python.valueToCode(block, 'password', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for Django create user
    var code = 'python manage.py createsuperuser --username=' + value_username + ' --password=' + value_password + '\n';
    return code;
  };
  
  Blockly.Python['django_create_group'] = function(block) {
    var value_group_name = Blockly.Python.valueToCode(block, 'group_name', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for Django create group
    var code = 'python manage.py creategroup ' + value_group_name + '\n';
    return code;
  };
  
  // Blockly Blocks
Blockly.Blocks['django_create_url'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create URL");
    this.setOutput(true, "URLPattern");
    this.setColour(230);
    this.setTooltip("Creates a URL pattern for routing in Django applications.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_template_tag'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create Template Tag");
    this.setOutput(true, "TemplateTag");
    this.setColour(230);
    this.setTooltip("Creates a custom template tag for use in Django templates.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_management_command'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create Management Command");
    this.setOutput(true, "ManagementCommand");
    this.setColour(230);
    this.setTooltip("Creates a custom management command for Django projects.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_middleware'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create Middleware");
    this.setOutput(true, "Middleware");
    this.setColour(230);
    this.setTooltip("Creates custom middleware for processing HTTP requests in Django.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_signal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create Signal");
    this.setOutput(true, "Signal");
    this.setColour(230);
    this.setTooltip("Creates a custom signal for inter-app communication in Django.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_custom_field'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create Custom Field");
    this.setOutput(true, "CustomField");
    this.setColour(230);
    this.setTooltip("Creates a custom model field for use in Django models.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_admin_action'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create Admin Action");
    this.setOutput(true, "AdminAction");
    this.setColour(230);
    this.setTooltip("Creates a custom admin action for use in Django admin interface.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_cache_middleware'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create Cache Middleware");
    this.setOutput(true, "CacheMiddleware");
    this.setColour(230);
    this.setTooltip("Creates cache middleware for caching in Django applications.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_authentication_backend'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create Authentication Backend");
    this.setOutput(true, "AuthenticationBackend");
    this.setColour(230);
    this.setTooltip("Creates a custom authentication backend for Django authentication.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_management_form'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create Management Form");
    this.setOutput(true, "ManagementForm");
    this.setColour(230);
    this.setTooltip("Creates a custom management form for Django admin interface.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_celery_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create Celery Task");
    this.setOutput(true, "CeleryTask");
    this.setColour(230);
    this.setTooltip("Creates a Celery task for background processing in Django.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['django_create_rest_api'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Django Create REST API");
    this.setOutput(true, "RESTAPI");
    this.setColour(230);
    this.setTooltip("Creates a RESTful API using Django Rest Framework.");
    this.setHelpUrl("");
  }
};

  
  // Blockly Python
  Blockly.Python['django_create_url'] = function(block) {
    var code = 'from django.urls import path\n\n';
    code += 'urlpatterns = [\n';
    code += '    path(\'\', views.index, name=\'index\'),\n';
    code += ']\n';
    return code;
  };
  
  Blockly.Python['django_create_template_tag'] = function(block) {
    var code = 'from django import template\n\n';
    code += 'register = template.Library()\n\n';
    code += '@register.simple_tag\n';
    code += 'def my_tag(value):\n';
    code += '    return value\n';
    return code;
  };
  
  Blockly.Python['django_create_management_command'] = function(block) {
    var code = 'from django.core.management.base import BaseCommand\n\n';
    code += 'class Command(BaseCommand):\n';
    code += '    help = \'Your custom management command here\'\n\n';
    code += '    def handle(self, *args, **options):\n';
    code += '        # Your command logic here\n';
    return code;
  };
  
  Blockly.Python['django_create_middleware'] = function(block) {
    var code = 'class MyMiddleware:\n';
    code += '    def __init__(self, get_response):\n';
    code += '        self.get_response = get_response\n\n';
    code += '    def __call__(self, request):\n';
    code += '        # Your middleware logic here\n';
    code += '        response = self.get_response(request)\n';
    code += '        return response\n';
    return code;
  };
  
  Blockly.Python['django_create_signal'] = function(block) {
    var code = 'from django.db.models.signals import pre_save\n';
    code += 'from django.dispatch import receiver\n\n';
    code += '@receiver(pre_save)\n';
    code += 'def my_signal(sender, instance, **kwargs):\n';
    code += '    # Your signal logic here\n';
    return code;
  };
  
  Blockly.Python['django_create_custom_field'] = function(block) {
    var code = 'from django.db import models\n\n';
    code += 'class MyField(models.Field):\n';
    code += '    # Your custom field logic here\n';
    return code;
  };
  
  Blockly.Python['django_create_admin_action'] = function(block) {
    var code = 'from django.contrib import admin\n\n';
    code += 'def my_action(modeladmin, request, queryset):\n';
    code += '    # Your admin action logic here\n';
    code += '    pass\n\n';
    code += 'my_action.short_description = \'My Action\'\n\n';
    code += 'class MyModelAdmin(admin.ModelAdmin):\n';
    code += '    actions = [my_action]\n';
    return code;
  };
  
  Blockly.Python['django_create_cache_middleware'] = function(block) {
    var code = 'class CacheMiddleware:\n';
    code += '    def __init__(self, get_response):\n';
    code += '        self.get_response = get_response\n\n';
    code += '    def __call__(self, request):\n';
    code += '        # Your cache middleware logic here\n';
    code += '        response = self.get_response(request)\n';
    code += '        return response\n';
    return code;
  };
  
  Blockly.Python['django_create_authentication_backend'] = function(block) {
    var code = 'from django.contrib.auth.backends import BaseBackend\n\n';
    code += 'class MyBackend(BaseBackend):\n';
    code += '    # Your authentication backend logic here\n';
    return code;
  };
  
  Blockly.Python['django_create_management_form'] = function(block) {
    var code = 'from django import forms\n\n';
    code += 'class MyForm(forms.Form):\n';
    code += '    # Your management form logic here\n';
    return code;
  };
  
  Blockly.Python['django_create_celery_task'] = function(block) {
    var code = 'from celery import shared_task\n\n';
    code += '@shared_task\n';
    code += 'def my_task():\n';
    code += '    # Your Celery task logic here\n';
    return code;
  };
  
  Blockly.Python['django_create_rest_api'] = function(block) {
    var code = 'from rest_framework.views import APIView\n';
    code += 'from rest_framework.response import Response\n\n';
    code += 'class MyAPI(APIView):\n';
    code += '    def get(self, request):\n';
    code += '        # Your API logic here\n';
    code += '        return Response({\'message\': \'Hello, World!\'})\n';
    return code;
  };
  